import { Module } from '@nestjs/common';
import { UserService } from './user.controller';
import { userController } from './user.service';

@Module({
  controllers: [userController],
  providers: [UserService]
})
export class UserModule {}
