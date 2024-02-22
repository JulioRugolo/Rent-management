import * as express from 'express';
import authMiddleware from '../middlewares/auth.middleware';
import {
  emailField,
  emailValid,
  passwordField,
  passwordValid } from '../middlewares/login.middleware';
import UsersController from '../controllers/user.controller';

const route = express.Router();

route.get('/role', authMiddleware, (req, res) => UsersController.role(req, res));
route.post(
  '/',
  emailField,
  emailValid,
  passwordField,
  passwordValid,
  UsersController.login,
);

export default route;
