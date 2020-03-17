import React from 'react';
import styled from 'styled-components'; 
 
export const CustomizedButton = styled.div`
&:hover{
    color:#fff;
    background-color:#F76000;
}
border:1px solid ${props => props.color ? props.color : "none"};
border-radius: ${props => props.borderRadius ? props.borderRadius : "none"};
padding: ${props => props.padding ? props.padding : "none"};
border-color:${props => props.borderColor ? props.borderColor : "none"};
color:${props => props.color ? props.color : "none"};
text-align: center;
background-color:${props => props.backgroundColor ? props.backgroundColor : "#ffffff"};
font-family:${props => props.fontFamily ? props.fontFamily : "Montserrat-Bold"};
cursor:pointer;
font-size:${props => props.fontSize ? props.fontSize :"18px;"};
`;