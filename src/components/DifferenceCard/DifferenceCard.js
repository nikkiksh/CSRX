import React from 'react';
import {CardWrapper} from '../Common/DashboardCauseCard/style';
import {ContentStyle} from './style';
import CustomLink from '../Common/CustomLink/CustomLink';

export default function DifferenceCard({content}){
    return(
        <>
            <CardWrapper>
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <ContentStyle>{content}</ContentStyle>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                    <CustomLink name={"Know More"}/>
                </div>
            </CardWrapper>
        </>
    );
}