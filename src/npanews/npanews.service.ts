import { Injectable, Param } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { take } from 'rxjs';

import { Repository } from 'typeorm';
import { Npanews } from './entities/npanews.entity';

@Injectable()
export class NpanewsService {
    constructor(@InjectRepository(Npanews) private readonly npanews : Repository<Npanews>){}

    async getAll(pages ?: number , limits ?: number) 
    {
        const [list, counts] = await this.npanews.findAndCount(
            {
                order : {
                    created_date : 'DESC'
                },
                skip : (pages-1)*limits,
                take : pages
            }
        );
        return {
            data:list,counts,pages,limits
        }
    }
    async getOne(id : number,pages ?: number , limits ?: number)
    {
        const [list, counts] = await this.npanews.findAndCount(
            {
                order : {
                    created_date : 'DESC'
                },
                where:{
                    npanews_id : id
                },
                skip : (pages-1)*limits,
                take : pages
            }
        );
        return {
            data:list,counts,limits,pages
        }
    }
}
