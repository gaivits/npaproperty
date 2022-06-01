import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Npanews } from './entities/npanews.entity';
import { NpanewsController } from './npanews.controller';
import { NpanewsService } from './npanews.service';


@Module({
  imports:[TypeOrmModule.forFeature([Npanews])],
  controllers: [NpanewsController],
  providers: [NpanewsService]
})
export class NpanewsModule {}
