import * as sinon from 'sinon';
import * as chai from 'chai';
import * as jwt from 'jsonwebtoken';
// @ts-ignore
import chaiHttp = require('chai-http');

import UserModel from '../database/models/users.model';
import mockLogin from './mocks/login';
import { app } from '../app';
import token from './mocks/token';

chai.use(chaiHttp);

const { expect } = chai;


describe('Test the /login route', function () {
  beforeEach(function () { sinon.restore(); });

  it('Test if it is possible to log in successfully', async function () {
    sinon.stub(UserModel, 'findOne').resolves(mockLogin as any);
    sinon.stub(jwt, 'sign').returns(token as any);

    const response = await chai.request(app)
      .post('/login')
      .send({ email: mockLogin.email, password: 'secret_admin' });

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
  });

  it('Test if it returns an error when the user does not fill in the email field', async function () {
    sinon.stub(UserModel, 'findOne').resolves();

    const response = await chai.request(app)
      .post('/login')
      .send({ password: 'secret_admin' });

    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
  });

  it('Test if it returns an error when the user does not fill in the password field', async function () {
    sinon.stub(UserModel, 'findOne').resolves();

    const response = await chai.request(app)
      .post('/login')
      .send({ email: mockLogin.email });

    expect(response).to.have.status(400);
    expect(response.body).to.be.an('object');
  });

  it('Test if the user does not provide a valid email', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'invalid@email.com',
        password: 'secret_admin'
      });

    expect(response.status).to.be.equal(401);
  });

  it('Test if the user does not provide a valid password', async () => {
    const response = await chai
      .request(app)
      .post('/login')
      .send({
        email: 'invalid@email.com',
        password: '12'
      });

    expect(response.status).to.be.equal(401);
  });

  it('Test if the user role is "admin"' , async () => {
    const user = {
      data: {
        id: 1
      }
    };
    sinon.stub(UserModel, 'findByPk').resolves();
    const response = await chai
      .request(app)
      .get('/login/role')
      .set('Authorization', `Bearer ${token}`)
      .send({user});

      expect(response.body).to.be.an('object');
      expect(response.body.role).to.equal('admin')
  });
});
