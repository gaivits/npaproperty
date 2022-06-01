
import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";


@Entity('npanews')
export class Npanews{
    
    @PrimaryGeneratedColumn()
    npanews_id : number
    @Column()
    short_news:string

    @Column()
    description:string 

    @Column()
    is_news : boolean

    @Column()
    is_recommended:boolean

    @Column()
    start_date : string

    @Column()
    end_date : string

    @Column()
    is_active : boolean

    @Column()
    is_approved:boolean

    @Column()
    approved_date : string

    @Column()
    npacomment : string

    @Column()
    user_id : string

    @Column()
    thumbnails : string

    @Column()
    banners : string

    @Column({default:Date.now})
    created_date:Date

    @Column({default:Date.now})
    updated_date:Date
}