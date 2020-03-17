import React from 'react';
import {Heading,Content,CardWrapper,Footer} from './style';
import CustomLink from '../CustomLink/CustomLink';

export default function DashboardCauseCard({heading,content}){
    return(
        <>
            <CardWrapper className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <Heading>
                    <p>{heading}</p>
                </Heading>
                <Content>
                    <p>{content}</p>
                </Content>
                <Footer>
                    <CustomLink name="Know More"/>
                    <CustomLink name="Donate"/>
                </Footer>
            </CardWrapper>
        </>
    )
} 