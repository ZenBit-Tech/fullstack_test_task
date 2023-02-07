import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { UserModule } from './user/user.module';
import { SeedsModule } from './seeds/seeds.module';
import { join } from 'path';

@Module({
  imports: [
    UserModule, 
    SeedsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'img'),
    }),],
  controllers: [],
  providers: [],
})
export class AppModule {}
