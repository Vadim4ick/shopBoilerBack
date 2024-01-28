import { ApiProperty } from '@nestjs/swagger';
import { MESSAGES } from 'src/messages';

export const mockUserLogin = {
  id: 3,
  name: 'Vadim',
  email: 'test@mail.ru',
  password: '123',
};

const mockUserSignup = {
  id: 3,
  username: 'vadim3',
  password: '$2b$10$rvnnad.uXokF3McmdQTUW..hmsH6OzFXamDAQa8nbVPqLGSdTpdPS',
  email: 'test3@mail.ru',
  updatedAt: '2024-01-27T16:23:06.725Z',
  createdAt: '2024-01-27T16:23:06.725Z',
};

export class LoginUserRequest {
  @ApiProperty({ example: mockUserLogin.name })
  username: string;

  @ApiProperty({ example: mockUserLogin.password })
  password: string;
}

export class LoginUserResponse {
  @ApiProperty({
    example: {
      id: mockUserLogin.id,
      username: mockUserLogin.name,
      password: mockUserLogin.password,
    },
  })
  user: {
    id: number;
    username: string;
    password: string;
  };

  @ApiProperty({ example: MESSAGES.LOGIN })
  msg: string;
}

export class LogoutUserResponse {
  @ApiProperty({ example: MESSAGES.LOGOUT })
  msg: string;
}

export class LoginCheckResponse {
  @ApiProperty({ example: mockUserLogin.id })
  userId: number;

  @ApiProperty({ example: mockUserLogin.name })
  username: string;

  @ApiProperty({ example: mockUserLogin.email })
  email: string;
}

export class SignupResponse {
  @ApiProperty({ example: mockUserSignup.id })
  userId: number;

  @ApiProperty({ example: mockUserSignup.createdAt })
  createdAt: string;

  @ApiProperty({ example: mockUserSignup.updatedAt })
  updatedAt: string;

  @ApiProperty({ example: mockUserSignup.username })
  username: string;

  @ApiProperty({ example: mockUserSignup.password })
  password: string;

  @ApiProperty({ example: mockUserSignup.email })
  email: string;
}
