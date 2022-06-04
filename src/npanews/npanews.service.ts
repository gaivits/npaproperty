import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Npanews } from './entities/npanews.entity';

@Injectable()
export class NpanewsService {
    constructor(@InjectRepository(Npanews) private readonly npanews : Repository<Npanews>){}

    async getAll(pages ?: number , limits ?: number) : Promise<any>
    {
        const [list, counts] = await this.npanews.findAndCount(
            {
                order : {
                    created_date : 'DESC'
                },
                where:{
                    is_news:true,
                    is_recommended:true,
                    is_active:true,
                    is_approved:true
                },
                skip : (+pages-1)*limits,
                take : +limits
            }
        )
        if(pages && limits)
        {
            return {
                counts,
                pages,
                limits,
                list
            }
        }
        else
        {
            return  {counts,list}
        }
    }
    async getById(id : number,pages ?: number , limits ?: number) : Promise<any>
    {
        const [list, counts] = await this.npanews.findAndCount(
            {
                order : {
                    created_date : 'DESC'
                },
                where:{
                    npanews_id : id,
                    is_news:true,
                    is_recommended:true,
                    is_active:true,
                    is_approved:true,
                },
                skip : (+pages-1)*(+limits),
                take : +limits
            }
        )
        return list
    }
}
