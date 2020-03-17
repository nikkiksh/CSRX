import React from 'react';
import CustomImage from '../CustomImage/CustomImage';
import Title from '../Title/Title';

export default function CampaignExecutives({name,imageURI}){
    return(
        <div className="d-flex pt-20 m-24">
        <CustomImage margin={"4px"} width={"40px"} borderRadius={"50%"} height={"40px"} imageURI={imageURI}/>
        <Title name={name} fontSize={"20px"} fontFamily={"Montserrat-Regular"} color={"#212121"}/>
     </div>
    )
}