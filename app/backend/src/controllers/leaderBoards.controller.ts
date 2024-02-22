import { Request, Response } from 'express';

import LeaderboardService from '../services/leaderBoards.service';

export default class LeaderboardController {
  static async findHomeLeaderboard(req: Request, res: Response) {
    const teams = await LeaderboardService.findHome();

    return res.status(200).json(teams);
  }

  static async findAwayLeaderboard(req: Request, res: Response) {
    const teams = await LeaderboardService.findAway();

    return res.status(200).json(teams);
  }
}
