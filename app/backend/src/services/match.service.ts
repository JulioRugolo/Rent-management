import Team from '../database/models/team.model';
import Match from '../database/models/match.model';

const findAll = async (): Promise<Match[]> => {
  const matches = await Match.findAll({
    include: [{
      model: Team,
      as: 'homeTeam',
      attributes: { exclude: ['id'] } }, {
      model: Team,
      as: 'awayTeam',
      attributes: { exclude: ['id'] } }] });
  return matches;
};
const getAllinProgress = async (inProgress: string): Promise<Match[]> => {
  const matches = await Match.findAll({
    where: { inProgress: inProgress === 'true' },
    include: [{
      model: Team,
      as: 'homeTeam',
      attributes: { exclude: ['id'] } }, {
      model: Team,
      as: 'awayTeam',
      attributes: { exclude: ['id'] } }] });
  return matches;
};
const finish = async (id: number) => {
  await Match.update({ inProgress: false }, { where: { id } });
};
const update = async (id: number, homeTeamGoals: number, awayTeamGoals: number) => {
  await Match.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
};

const create = async (match: Match): Promise<Match | undefined> => {
  const homeTeam = await Team.findByPk(match.homeTeamId);
  const awayTeam = await Team.findByPk(match.awayTeamId);

  if (!homeTeam || !awayTeam) return;

  const result = await Match.create({ ...match, inProgress: true });

  return result;
};

export default {
  findAll,
  getAllinProgress,
  finish,
  update,
  create,
};
