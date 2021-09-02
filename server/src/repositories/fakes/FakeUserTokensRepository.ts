import UserToken from '@models/UserToken';
import AppError from '../../errors/AppError';

import IUserTokensRepository from '../../repositories/interfaces/IUserTokensRepository';
import { v4 as uuid } from 'uuid';

class FakeUserTokensRepository implements IUserTokensRepository {
  private userTokens: UserToken[] = [];

  public async generate(user_id: string): Promise<UserToken> {
    const userToken = new UserToken();

    Object.assign(userToken, {
      id: uuid(),
      token: uuid(),
      user_id,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.userTokens.push(userToken);

    return userToken;
  }

  public async findByToken(token: string): Promise<UserToken> {
    const userToken = await this.userTokens.find(tkn => tkn.token === token);

    if (!userToken) {
      throw new AppError('Unable to find user token');
    }

    return userToken;
  }
}

export default FakeUserTokensRepository;
