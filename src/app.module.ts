import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { SeedsModule } from './seeds/seeds.module';
import { join } from 'path';
import {UserModuleFront} from "./user-front/user.module";

@Module({
  imports: [
    UserModule,
    UserModuleFront,
    SeedsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'img'),
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
