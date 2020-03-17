import React from 'react';
import './cause.scss'
import {ImageStyle,PStyle,AnchorStyle,CardStyle} from './style';
import CustomButton from '../../Common/CustomButton/CustomButton';
 
export default function CauseCard({supporters,content,title,amount}){
    return(
        <>
            <div className="col-12 col-lg-3 col-md-6 col-sm-6 pt-40 mb-2 mt-2">
                    <CardStyle className="card mb-10">
                        <div className="card-body same-height text-left">
                            <PStyle className="position-absolute">{supporters}</PStyle>
                            <ImageStyle src={require('../../../images/donor.png')} alt="causes-image"/>
                                <h5 className="text-capitalize">{title}</h5>
                                <p className="fs-14">{content}</p>
                                <div className="col-12 pb-5 pt-3 pr-0 pl-0">
                                    <p className="Montserrat-Medium fs-14">{amount}</p>
                                    <div className="progress">
                                    <div className="progress-bar bg-cause"></div>
                                </div>
                            </div>
                            <div className="col-5 col-lg-5 col-md-5 col-sm-5 float-right p-0 text-center">
                            <CustomButton content={"Donate"} color={"#F76000"} padding={"2px 5px"} borderRadius={"25px"} fontSize={"16px"} borderColor={"#F76000"} fontFamily={"Montserrat-Medium"} />
                            {/* <AnchorStyle className="fs-14 card-button" href="donate.html">Donate</AnchorStyle> */}
                            </div>
                        </div> 
                    </CardStyle>      
                </div>
        </>
    )
}