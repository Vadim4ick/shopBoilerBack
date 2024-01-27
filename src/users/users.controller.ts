import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUserDto';
import { LocalAuthGuard } from 'src/auth/localAuth.guard';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';
import { ApiBody, ApiOkResponse } from '@nestjs/swagger';
import {
  LoginCheckResponse,
  LoginUserRequest,
  LoginUserResponse,
  LogoutUserResponse,
  SignupResponse,
} from './types';
import { MESSAGES } from 'src/messages';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @ApiOkResponse({ type: SignupResponse })
  @Post('/signup')
  @HttpCode(HttpStatus.CREATED)
  @Header('Content-type', 'application/json')
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @ApiBody({ type: LoginUserRequest })
  @ApiOkResponse({ type: LoginUserResponse })
  @Post('/login')
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Header('Content-type', 'application/json')
  async login(@Request() req) {
    return { user: req.user, msg: MESSAGES.LOGIN };
  }

  @ApiOkResponse({ type: LoginCheckResponse })
  @Get('/login-check')
  @UseGuards(AuthenticatedGuard)
  @Header('Content-type', 'application/json')
  async loginCheck(@Request() req) {
    return req.user;
  }

  @ApiOkResponse({ type: LogoutUserResponse })
  @Get('/logout')
  @Header('Content-type', 'application/json')
  async logout(@Request() req) {
    req.session.destroy();
    return { msg: MESSAGES.LOGOUT };
  }
}
