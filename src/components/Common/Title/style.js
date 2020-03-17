import React from 'react';
import styled from 'styled-components';
 
export const TitleStyle = styled.p`
color: ${props=> props.color?props.color:"#404040"};
font-size: ${props => props.fontSize ? props.fontSize : "44px"};
font-family: ${props => props.fontFamily ? props.fontFamily :'Montserrat-Medium'};
margin-bottom: ${props => props.margin ? props.margin :'10px'};
@media only screen and (max-width:1400px){
    font-size:30px;
}
@media only screen and (max-width:960px){
    font-size:27px;
}
`;