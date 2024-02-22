import TeamModel from '../database/models/team.model';
import MatchModel from '../database/models/match.model';
import { homeStatistics, awayStatistics } from '../utils/businessModel';
import totalPointsOrdering from '../utils/totalPointsOrdering';

export default class LeaderboardService {
  static async findHome() {
    const allTeams = await TeamModel.findAll();

    const homeTeamsStatistics = await allTeams.map(async (team) => {
      const homeMatches = await MatchModel.findAll(
        { where: { homeTeamId: team.id, inProgress: false } },
      );

      const homeMatchesStatistics = await homeMatches.map((match) => (
        awayStatistics(team.teamName, [match])));

      const teamStatistics = homeMatchesStatistics[homeMatchesStatistics.length - 1];

      return { ...teamStatistics };
    });

    const homeTeamsData = await Promise.all(homeTeamsStatistics);

    return totalPointsOrdering(homeTeamsData as unknown as []);
  }

  static async findAway() {
    const allTeams = await TeamModel.findAll();

    const awayTeamsStatistics = await allTeams.map(async (team) => {
      const awayMatches = await MatchModel.findAll(
        { where: { awayTeamId: team.id, inProgress: false } },
      );

      const awayMatchesStatistics = await awayMatches.map((match) => (
        homeStatistics(team.teamName, [match])));

      const teamStatistics = awayMatchesStatistics[awayMatchesStatistics.length - 1];

      return { ...teamStatistics };
    });

    const awayTeamsData = await Promise.all(awayTeamsStatistics);

    return totalPointsOrdering(awayTeamsData as unknown as []);
  }
}
