import { ApiProperty } from '@nestjs/swagger';

export class UserUpdateDto {
  @ApiProperty({
    description:
      'User Name',
    example: 'admin@mail.ru',
  })
  name: string;

  @ApiProperty({
    description:
      'The email address',
    example: 'admin@mail.ru',
  })
  email: string;

  @ApiProperty({
    description:
      'User Password',
    example: 'admin@mail.ru',
  })
  password: string;
}