import React from 'react';
import {CustomImageStyle} from './style';

export default function CustomImage({width,height,imageURI,borderRadius,margin}){
    const baseUri=require.context("../../../images/");

    return(
        <>
            <CustomImageStyle margin={margin} width={width} height={height} borderRadius={borderRadius} src={baseUri('./' + imageURI)}/>
        </>
    )
}