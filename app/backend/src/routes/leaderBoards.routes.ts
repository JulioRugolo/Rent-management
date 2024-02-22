import { Router } from 'express';

import LeaderboardController from '../controllers/leaderBoards.controller';

const router = Router();

router.get('/home', LeaderboardController.findHomeLeaderboard);
router.get('/away', LeaderboardController.findAwayLeaderboard);

export default router;
