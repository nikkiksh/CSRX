import React, { useState } from 'react';
import Title from '../components/Common/Title/Title';
import CustomFilter from '../components/Common/CustomFilter/CustomFilter';
import SortBy from '../components/Common/SortBy/SortBy';
import Search from '../components/Common/Search/Search';
import CauseCard from '../components/Common/CauseCard/CauseCard';
import { StickyDiv,PositionRelative } from './style.js';

export default function Causes(){
    const [cardInfo,setCardInfo]=useState([
        // {
        //     "cause_id": 1,
        //     "user_id": 12,
        //     "cause_name": "Scholarship",
        //     "cause_details": "vdhjqddvqjfrqg kjgkq mrgyrg qbfekutqei qmrfyqgr mqgryqge",
        //     "media_data": "file1.json",
        //     "goal_amount": 134000,
        //     "achieved_amount": 25000,
        //     "is_timebound": "True",
        //     "start_date": "2020-03-13 15:33:12",
        //     "end_date": "2020-04-13 09:33:12",
        //     "created_on": "2020-03-11 10:33:12",
        //     "updated_on": "2020-03-12 12:00:01",
        //     "is_active": "NULL"
        //   },
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"},
        {supporters:"303 Supporters",title:"Educating 2 kids from Malvani",content:"Description of the cause covered in about one or two lines that just about describes the cause",amount:"Rs 23,450 of Rs 1,00,000"}
    ])
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
        <StickyDiv className="col-12 col-lg-12 col-md-12 col-sm-12 d-flex">
            <div className="col-12 col-md-3 col-lg-4 col-sm-4">
                <Title name="Our Causes"/>
            </div>
            <div className="col-12 col-md-9 col-lg-8 col-sm-8 d-flex text-center fs-sm-16">
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
                <Search />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
                <CustomFilter />
                </div>
                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 col-12">
                <SortBy />
                </div>
            </div>
        </StickyDiv>
        <PositionRelative className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            {
                cardInfo.map((info)=>{
                    return(<CauseCard supporters={info.supporters} title={info.title} content={info.content} amount={info.amount}/>)
                })
            }

        </PositionRelative>
    </div>
    )
}