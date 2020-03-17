import React, { useState } from 'react';
import Title from '../components/Common/Title/Title';
import '../styles/css/individualCause.scss';
import CustomImage from '../components/Common/CustomImage/CustomImage';
import CustomButton from '../components/Common/CustomButton/CustomButton';
import TimelineChart from '../components/Common/Graphs/Timeline/Timeline';
import ExecutiveDiv from '../components/Common/ExecutiveDiv/ExecutiveDiv';
import CampaignExecutives from '../components/Common/CampaignExecutives/CampaignExecutives';
import DonationModal from '../components/DonationModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons'

const ExecutiveCSR=
[
{name:"John Doe",contactName:"Contact John",mobileNumber:"+XX- XXXXXXXXXX",emailId:"johndoe@csrx.org",content:"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea",subHeading:"Supports 2 causes"},
{name:"John Doe",contactName:"Contact John",mobileNumber:"+XX- XXXXXXXXXX",emailId:"johndoe@csrx.org",content:"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea",subHeading:"Supports 2 causes"}
]
const CampaignExecutiveNames=[
   {name:"Jonathan Doe",imageURI:"cause-image.png"},
   {name:"Nathaniel Sigurdsson",imageURI:"cause-image.png"}
]
const beneficiariesNames=[
   {name:"Beneficiary_One",imageURI:"cause-image.png"},
   {name:"Beneficiary_Two",imageURI:"cause-image.png"}
]

export default function IndividualCause(){
   const [modalShow, setModalShow] = useState(false);
    return(
        <section className="cause-single pb-50">
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
           <div className=""><a className="f-s-20" href="#"><FontAwesomeIcon icon={faCaretLeft} className="mr-2"/>Back</a></div>
           </div>
           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
              <div className="row">
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12  col-12 pt-30">
                    <Title fontFamily={"Montserrat-Bold"} fontSize={"40px"} name="Increase grades of Ram and Shyam" />
                 </div>
                 <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
                       <a href="#" className="report"><CustomImage width={"14px"} height={"14px"} imageURI={"report.svg"}/><span className="pl-2">Report</span></a>
                       <a href="#" className="share"><CustomImage width={"14px"} height={"14px"} imageURI={"share.svg"}/><span className="pl-2">Share</span></a>
                 </div>
                 <div className="col-6 col-lg-6 col-md-6 col-sm-12">
                    <p className="fs-24 text-left">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis.
                    </p>
                    <CustomImage imageURI={"cause-image.png"} width={"100%"} height={"auto"}/>
                 </div>
                 <div className="col-12 col-lg-1 col-md-1"></div>
                 <div className="col-12 col-lg-5 col-md-5 col-sm-12 pt-4">
                    <div className="bg-white col-lg-12 col-md-12 col-sm-12 col-xs-12 shadow">
                        <Title name="Campaign Executive (S)" fontSize={"24px"} color={"#000000"} fontFamily={"Montserrat-Regular"}/>
                           <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                              {
                                 CampaignExecutiveNames.map((item)=>{
                                    return(
                                       <CampaignExecutives name={item.name} imageURI={item.imageURI}/>
                                    )
                                 })
                              }
                           </div>
                       <hr className="hr2"/>
                       <Title name="BENEFICIARIES" fontSize={"24px"} color={"#000000"} fontFamily={"Montserrat-Regular"}/>
                       <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                       {
                                 beneficiariesNames.map((item)=>{
                                    return(
                                       <CampaignExecutives name={item.name} imageURI={item.imageURI}/>
                                    )
                                 })
                              }
                        </div>
                       <hr className="hr2"/>
                       <div className=" pb-40 align-items d-flex">
                          <div className="col-sm-6 col-lg-6 col-md-6 col-sm-6 col-xs-6">
                             <Title name="Help us change more lives for the better by joining us!" fontSize={"14px"} fontFamily={"Montserrat-Medium"} color={"#212121"} />
                          </div>
                          <div className="col-sm-6 col-lg-6 col-md-6 col-xs-6" onClick={() => setModalShow(true)}><CustomButton content={"Donate"} color={"#ffffff"} padding={"10px"} borderRadius={"8px"} borderColor={"none"} backgroundColor={"#F76000"}/></div>
                       </div>
                    </div>
                 </div>
                 <div className="col-12 pt-40 m-t-80">
                    <Title fontFamily={"Montserrat-Bold"} fontSize={"40px"} name="The challenge and the impact" />
                 </div>
                 <div className="col-12 col-lg-9 col-md-9 col-sm-9">
                    <p className="text-left fs-24 p-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                       Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                       Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est 
                       laborum
                    </p>
                    <p className="pt-40">Required Funds : <span className="Montserrat-bold"> 1,00,000 Rs</span></p>
                    <div className="progress">
                       <div className="progress-bar bg-cause"></div>
                    </div>
                    <p className="text-center pt-20">We are at : <span className="color-green Montserrat-bold">37,000 Rs</span></p>
                 </div>
                 <div className="col-12 col-lg-3 col-md-3 col-sm-3">
                    <div className="circletest"></div>
                    <p className="text-center">Finance Distribution</p>
                 </div>
                 <div className="col-12 pt-40 pb-80">
                    <h4 className="heading-title text-left">Our Timeline</h4>
                    <TimelineChart />
                 </div>
                 <div className="col-12 col-md-12 col-sm-12 col-xs-12 p-40 bg-color-grey">
                 <Title fontFamily={"Montserrat-Regular"} fontSize={"40px"} name="Get to know the beneficiaries" />
                 <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 p-0">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                 </div>
                 </div>
                 <div className="col-12 col-lg-4 col-md-4 col-sm-4 pt-40">
                 <div id="littleSlider" className="carousel slide text-center" data-ride="carousel">
                        <ul className="carousel-indicators">
                          <li data-target="#littleSlider" data-slide-to="0" className="active"></li>
                          <li data-target="#littleSlider" data-slide-to="1"></li>
                          <li data-target="#littleSlider" data-slide-to="2"></li>
                        </ul>
                        <div className="carousel-inner">
                          <div className="carousel-item active">
                            <img src={require("../images/littleslider.png")} alt=""/>   
                          </div>
                          <div className="carousel-item">
                            <img src={require("../images/littleslider.png")} alt=""/>   
                          </div>
                          <div className="carousel-item">
                            <img src={require("../images/littleslider.png")} alt=""/>   
                          </div>
                        </div>
                    </div>
                 </div>
                 <div className="col-12 col-lg-6 col-md-6 col-sm-6 pt-40">
                 <Title fontFamily={"Montserrat-Regular"} fontSize={"68px"} name="Jonathan Doe" />
                    <p className="fs-16 Montserrat-medium text-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
                       in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                       cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                    <div className="row">
                       <div className="col-12 col-lg-7 col-md-7 col-sm-7">
                          <p className="m-0">Contact John</p>
                          <p className="m-0"><a href="tel:">+XX- XXXXXXXXXX</a> </p>
                          <p className="m-0"><a href="mailto:johndoe@csrx.org">johndoe@csrx.org</a> </p>
                       </div>
                    </div>
                 </div>
                 <div className="col-12 col-md-12 col-sm-12 col-xs-12 p-40 bg-color-grey">
                 <Title fontFamily={"Montserrat-Regular"} fontSize={"40px"} name="Meet the CSR Executive (s)" />
                 <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 p-0">
                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                 </div>
                 </div>
                 <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 d-flex">
                  {ExecutiveCSR &&
                     ExecutiveCSR.map((item)=>{
                        return(
                        <ExecutiveDiv name={item.name} mobileNumber={item.mobileNumber} content={item.content} emailId={item.emailId} contactName={item.contactName} subHeading={item.subHeading}/>
                     )})
                  }
                  </div>
              </div>
           </div>
           <DonationModal show={modalShow} onHide={() => setModalShow(false)}/>
     </section>
    )
}