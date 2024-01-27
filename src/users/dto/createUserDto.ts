import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Vadim' })
  @IsNotEmpty()
  readonly username: string;

  @ApiProperty({ example: '123' })
  @IsNotEmpty()
  readonly password: string;

  @ApiProperty({ example: 'firulvv@mail.ru' })
  @IsNotEmpty()
  readonly email: string;
}
