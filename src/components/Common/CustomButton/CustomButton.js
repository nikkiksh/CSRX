import React from 'react';
import {CustomizedButton} from './style';
 
export default function CustomButton({content,fontFamily,color, padding,fontSize, borderRadius,borderColor,backgroundColor}){
    return (
        <>
            <CustomizedButton fontSize={fontSize} fontFamily={fontFamily} color={color} padding={padding} borderRadius={borderRadius} borderColor={borderColor} backgroundColor={backgroundColor} className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <span>{content}</span>
            </CustomizedButton>
        </>
    )
}