import { NextFunction, Request, Response } from 'express';
import validator from 'validator';

const allFields = 'All fields must be filled';
const invalidInput = 'Invalid email or password';

const emailField = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: allFields });
  }

  next();
};

const emailValid = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  if (!validator.isEmail(email)) {
    return res.status(401).json({ message: invalidInput });
  }

  next();
};

const passwordField = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ message: allFields });
  }

  next();
};

const passwordValid = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;

  if (password.length < 6) {
    return res.status(401).json({ message: invalidInput });
  }

  next();
};

export {
  emailField,
  emailValid,
  passwordField,
  passwordValid,
};
