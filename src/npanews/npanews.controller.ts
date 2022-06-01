import { Controller,Get, Param, Query, Req } from '@nestjs/common';
import { NpanewsService } from './npanews.service'; 
import { Npanews } from './entities/npanews.entity';
@Controller('npanews')
export class NpanewsController {
  constructor(private readonly npanewsService: NpanewsService) {}

  @Get('getAll')
  
  async getAll(@Query() q : {pages:string,limits:string}){
    return await this.npanewsService.getAll(+q.pages,+q.limits)
  }
  
  @Get('getOne/:npanews_id')
  async getOne(@Param('npanews_id') id : number,@Query() q ?: {pages:string,limits:string})
  {
      return await this.npanewsService.getOne(id,+q.pages,+q.limits)
  } 

}
