import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import MatchesModel from '../database/models/match.model';
import Matches from './mocks/matches';
import { app } from '../app';

chai.use(chaiHttp);

const { expect } = chai;

describe('Test the /matches route', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Should be able to list all matches', async function () {
    sinon.stub(MatchesModel, 'findAll').resolves(Matches as any);
    const response = await chai.request(app).get('/matches');
    expect(response.status).to.be.equal(200);
  });

  it('Should be able to filter matches in progress', async function () {
    const matchesInProgress = Matches.filter((match) => match.inProgress === true);
    sinon.stub(MatchesModel, 'findAll').resolves(Matches as any);
    const response = await chai.request(app).get('/matches?inProgress=true');
    expect(response.status).to.be.equal(200);
  });

  it('Should be able to filter finished matches', async function () {
    const matchesInProgress = Matches.filter((match) => match.inProgress === false);
    sinon.stub(MatchesModel, 'findAll').resolves(Matches as any);
    const response = await chai.request(app).get('/matches?inProgress=false');
    expect(response.status).to.be.equal(200);
  });

  
});
