import React from 'react';
import {InputStyle,ImageStyle} from './style'
 
export default function Search(){
    return(
        <>
                <div className="">
                            <form action="">
                                <InputStyle type="text" placeholder="Search..." name="search"/>
                                <ImageStyle width="25px" height="25px" src={require('../../../images/Search.svg')} alt="search"/>
                              </form>
                </div>
        </>
    )
}