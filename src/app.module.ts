/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
       'mongodb+srv://root:root@cluster0.y0bjqxm.mongodb.net/?retryWrites=true&w=majority',
      ), 
      UsersModule,
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
