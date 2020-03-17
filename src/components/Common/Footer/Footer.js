import React from 'react';
import './Footer.scss';
import { Container,Row,Col } from 'react-bootstrap';

export default function Footer (){
    return(
    //     <div className="container">
    //     <div className="col-lg-12">
    //         <div className="row">
    //             <div className="col-12 col-sm-12 text-center pb-30">
    //                 <hr/>
    //                 <ul className="footer-links">
    //                     <li><a href="#" target="_blank"><img src={require('../../../images/google-plus.svg')} alt=""/></a></li>
    //                     <li><a href="#" target="_blank"><img src={require('../../../images/facebook.svg')} alt=""/></a></li>
    //                     <li><a href="#" target="_blank"><img src={require('../../../images/google-plus.svg')} alt=""/></a></li>
    //                     <li><a href="#" target="_blank"><img src={require('../../../images/facebook.svg')} alt=""/></a></li>
    //                 </ul>
    //                 <a href="#" className="text-center Montserrat-bold">www.logo.org</a>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    <div className="footer">
    <div className="col-12">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex text-center pt-40 pb-40">
              <div className="col-lg-2 col-md-2">
            <a href="#" className="color-white text-uppercase">Blog</a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <a href="#" className="color-white text-uppercase">About Us</a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <a href="#" className="color-white text-uppercase">Contact</a>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3">
                <a href="#" className="color-white text-uppercase">Support</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 d-flex text-center pt-40 pb-40">
                <ul className="footer-links">
                    <li><a href="#" target="_blank"><img src={require('../../../images/google-plus.svg')} alt=""/></a></li>
                    <li><a href="#" target="_blank"><img src={require('../../../images/facebook.svg')} alt=""/></a></li>
                    <li><a href="#" target="_blank"><img src={require('../../../images/google-plus.svg')} alt=""/></a></li>
                    <li><a href="#" target="_blank"><img src={require('../../../images/facebook.svg')} alt=""/></a></li>
                    <li> <a href="#" className="fs-20 color-white Montserrat-bold">www.logo.org</a></li>
                </ul>
               </div>
            </div>
        </div>
    </div>
    )
}