import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authorizationHeader = req.headers.authorization;

  if (!authorizationHeader) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorizationHeader.replace('Bearer ', '');

  try {
    const decodedToken = jwt.verify(token, 'jwt_secret');
    req.body.user = decodedToken;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
};

export default authMiddleware;
