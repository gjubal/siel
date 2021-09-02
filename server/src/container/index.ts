import { container } from 'tsyringe';

import '../providers';

import IUsersRepository from '../repositories/interfaces/IUsersRepository';
import IUserTokensRepository from '../repositories/interfaces/IUserTokensRepository';
import UsersRepository from '../repositories/UsersRepository';
import UserTokensRepository from '../repositories/UserTokensRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);
