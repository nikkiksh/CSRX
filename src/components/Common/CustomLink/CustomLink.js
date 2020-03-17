import React from 'react';
import {LinkStyle} from './style';

export default function CustomLink({name}){
    return(
        <>
            <LinkStyle href="#">{name}</LinkStyle>
        </>
    )
}