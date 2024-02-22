import { compareSync } from 'bcryptjs';
import { Request, Response } from 'express';
import { createToken } from '../utils/tokenGenerate';
import LoginService from '../services/user.service';

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await LoginService.getUserByEmail(email);

  if (!user || !compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = createToken({
    id: user.id,
    email,
  });
  return res.status(200).json({ token });
};

const role = async (req: Request, res: Response) => {
  const { user } = req.body;
  const { id } = user.data;

  const { status, data } = await LoginService.getByRole(id);
  return res.status(status).json({ role: data.role });
};

export default {
  login,
  role,
};
