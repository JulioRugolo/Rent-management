import { sign, verify, JwtPayload } from 'jsonwebtoken';

const secret = process.env.JWT_SECRET || 'hipopotamoNaoVoa';

const verifyToken = (token: string): JwtPayload | string => verify(token, secret);

const createToken = (payload: object): string =>
  sign({ data: payload }, secret);

export {
  verifyToken,
  createToken,
};
