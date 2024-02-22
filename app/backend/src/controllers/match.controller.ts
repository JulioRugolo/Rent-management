import { Request, Response } from 'express';
import matchService from '../services/match.service';

const findAll = async (req: Request, res: Response) => {
  const { inProgress } = req.query;
  if (typeof inProgress === 'string') {
    const matches = await matchService.getAllinProgress(inProgress);
    return res.status(200).json(matches);
  }
  const matches = await matchService.findAll();
  return res.status(200).json(matches);
};

const finish = async (req: Request, res: Response) => {
  const { id } = req.params;
  await matchService.finish(Number(id));
  return res.status(200).json({ message: 'Finished' });
};

const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { homeTeamGoals, awayTeamGoals } = req.body;
  await matchService.update(Number(id), homeTeamGoals, awayTeamGoals);
  return res.status(200).json({ message: 'Match Updated' });
};

const create = async (req: Request, res: Response) => {
  const match = req.body;

  if (match.homeTeamId === match.awayTeamId) {
    const returnMessage = 'It is not possible to create a match with two equal teams';
    return res.status(422)
      .json({ message: returnMessage });
  }

  const result = await matchService.create(match);

  if (result === undefined) {
    const returnMessage = 'There is no team with such id!';
    return res.status(404).json({ message: returnMessage });
  }

  return res.status(201).json(result);
};

export default {
  findAll,
  finish,
  update,
  create,
};
