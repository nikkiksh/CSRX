import React from 'react';
import CustomImage from './CustomImage/CustomImage';
import styled from 'styled-components'

const Wrapper=styled.div`
box-shadow:0px 4px 8px #0000001A`;

const PStyle=styled.p`
font-size:${props=>props.fontSize ? props.fontSize :'18px'}
font-family:${props => props.fontFamily ? props.fontFamily : "Montserrat-Regular"};
`;

export default function ExecutiveCauseCard({content,supporters,imageURI}){
    return(
        <Wrapper className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <PStyle>{content}</PStyle>
                <PStyle fontFamily={"Montserrat-SemiBold"} fontSize={"13px"}>{supporters}</PStyle>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex align-items-center">
            <div className="hexagon cardhexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                {/* <img src={require('../../images/cause-image.png')} width=""/> */}
            </div>
        </Wrapper>
    )
}