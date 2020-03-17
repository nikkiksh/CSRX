import React from 'react';
import {TitleStyle} from './style';

export default function Title({name,fontSize,color,fontFamily,margin}){
    return(
    <TitleStyle fontSize={fontSize} color={color} margin={margin} fontFamily={fontFamily}>{name}</TitleStyle>
    );
}