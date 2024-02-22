import * as express from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import MatchController from '../controllers/match.controller';

const route = express.Router();

route.patch('/:id', authMiddleware, MatchController.update);
route.patch('/:id/finish', authMiddleware, MatchController.finish);
route.get('/', MatchController.findAll);
route.post('/', authMiddleware, MatchController.create);

export default route;
