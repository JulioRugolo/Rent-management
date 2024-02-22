import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import TeamModel from '../database/models/team.model';
import Teams from './mocks/teams';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test the /teams route', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Should be able to list all teams', async function () {
    sinon.stub(TeamModel, 'findAll').resolves(Teams as any);
    const response = await chai.request(app).get('/teams');

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('array');
  });

  it('Should be able to find a team by id', async function () {
    sinon.stub(TeamModel, 'findByPk').resolves(Teams[0] as any);
    const response = await chai.request(app).get('/teams/1');

    expect(response).to.have.status(200);
    expect(response.body).to.be.an('object');
  });
});
