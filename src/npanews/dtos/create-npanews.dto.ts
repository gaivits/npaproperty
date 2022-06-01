import { Url } from "url"

export class createNpanewsDto
{
    npanews : number
    short_news:string
    description:string
    is_news : boolean
    is_recommended : boolean
    start_date:string
    end_date : string
    is_active : boolean
    is_approved:boolean
    approved_date:string
    comments:string
    user_id : number
    thumbnails:string
    banners:string
    created_date: Date
    updated_date: Date
}