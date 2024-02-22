import User from '../database/models/users.model';

const getUserByEmail = async (email: string) => {
  const user = await User.findOne({ where: { email } });
  if (!user) return null;
  return user;
};

const getByRole = async (id: number) => {
  const foundUser = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  return { status: 200, data: { role: foundUser?.role } };
};

export default {
  getUserByEmail,
  getByRole,
};
