import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Npanews } from './npanews/entities/npanews.entity';
import { NpanewsModule } from './npanews/npanews.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'pamconpa',
    entities: [Npanews],
    synchronize: false
      }),NpanewsModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
