import React, { useState } from 'react';
import Header from '../components/Common/Header/Header';
import Footer from '../components/Common/Footer/Footer';
import Carousel from '../components/Common/Carousel/Carousel';
import Title from '../components/Common/Title/Title';
import DashboardCauseCard from '../components/Common/DashboardCauseCard/DashboardCauseCard';
import CustomLink from '../components/Common/CustomLink/CustomLink';
import DifferenceCard from '../components/DifferenceCard/DifferenceCard';

export default function DonorDashboard(){
    const [causeCards,setcauseCards]=useState([{
        heading:"Child Education",content:"HELPING CHILDREN SHOOT FOR STARS"},
        {heading:"Cause 2 : Tagline of the cause",content:""},
        {heading:"Cause 3 : Tagline of the cause",content:""},
        {heading:"Cause 4 : Tagline of the cause",content:""}
    ]);
    const [differenceCards,setdifferenceCards]=useState(["Best Campaigns 2018","Case Study","Locations we have Covered"]);
    return(
        <>
            <Header />
            <Carousel />
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-5">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-3">
                    <Title name={"Causes"}/>
                    {
                        causeCards.map((cardContent)=>{
                            return(
                                <div className="col-lg-6 col-md-6">
                                    <DashboardCauseCard heading={cardContent.heading} content={cardContent.content}/>
                                </div>
                            )
                        })
                    }
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center pt-5 pb-5">
                    <CustomLink name="See all Causes"/>
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5">
                    <Title name={"Difference we have created"}/>
                    {
                        differenceCards.map((differenceCards)=>{
                            return(
                                <div className="col-lg-6 col-md-6">
                                    <DifferenceCard content={differenceCards}/>
                                </div>
                            )
                        })
                    }
            </div>
            </div>
            <Footer />
        </>
    );
}