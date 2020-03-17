import React from 'react';
import './Carousel.scss';
import CustomButton from '../CustomButton/CustomButton';

export default function Carousel(){
    return(
        <section className="banner">
        <div id="bannerSlider" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#bannerSlider" data-slide-to="0" className="active"></li>
              <li data-target="#bannerSlider" data-slide-to="1"></li>
              <li data-target="#bannerSlider" data-slide-to="2"></li>
            </ul>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require('../../../images/banner.jpg')} alt=""/>
                <div className="carousel-caption">
                 <p className="fs-50 Montserrat-bold">“Impactful mission statement”</p>             
                  {/* <a className="knowmore" href="#">Know More About Us</a> */}
                  <CustomButton padding={"10px 10px"} borderRadius={"5px"} borderColor={"#797979"} color={"#797979"} content={"Know More About Us"}/>
                </div>   
              </div>
              <div className="carousel-item">
                <img src={require('../../../images/banner.jpg')} alt=""/>
                <div className="carousel-caption">
    <p className="fs-50 Montserrat-bold">The Impact we have created</p>             
                  {/* <a className="knowmore" href="donate.html">Donate</a> */}
                  <CustomButton padding={"10px 10px"} borderRadius={"5px"} borderColor={"#797979"} color={"#797979"} content={"Donate"}/>
                </div>   
              </div>
              <div className="carousel-item">
                <img src={require('../../../images/banner.jpg')} alt=""/>
                <div className="carousel-caption">
    <p className="fs-50 Montserrat-bold">The Impact we have created</p>             
                  {/* <a className="knowmore" href="donate.html">Donate</a> */}
                  <CustomButton padding={"10px 10px"} borderRadius={"5px"} borderColor={"#797979"} color={"#797979"} content={"Donate"}/>
                </div>   
              </div>        
            </div>        
          </div>
    </section>
    );
}