import React from 'react';
import Title from '../Title/Title';
import styled from "styled-components";
import CustomImage from '../CustomImage/CustomImage';

const ExecutiveDiv=({name,subHeading,content,contactName,emailId,mobileNumber})=>(
    <div className="col-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
       <div className="col-8 col-lg-8">
       <div className="hexagon hexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
          <div className="d-flex pt-60">
             <div className=""></div>
             <div className="csr-executives">
                <Title name={name} fontSize={"32px"} fontFamily={"Montserrat-Bold"} color={"#404040"} />
                <Title name={subHeading} fontSize={"24px"} fontFamily={"Montserrat-Bold"} color={"#404040"} />
                <p className="pt-40">
                    {content}
                </p>
             </div>
          </div>
          <div>
            <p className="m-0 pt-50">{contactName}</p>
            <p className="m-0"><a href="tel:">{mobileNumber}</a> </p>
            <p className="m-0"><a href="mailto:johndoe@csrx.org">{emailId}</a> </p>
       </div>
       </div>
    </div>
)
export default ExecutiveDiv;