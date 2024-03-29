import ILeaderboard from '../Interfaces/ILeaderboard';

const totalPointsOrdering = (matches: ILeaderboard[]) => matches.sort((a, b) => (
  b.totalPoints - a.totalPoints
  || b.totalVictories - a.totalVictories
  || b.goalsBalance - a.goalsBalance
  || b.goalsFavor - a.goalsFavor
  || a.goalsOwn - b.goalsOwn
));

export default totalPointsOrdering;
