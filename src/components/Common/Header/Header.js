import React, { useState } from 'react';
import './header.scss';
import CustomButton from '../CustomButton/CustomButton'
import Button from 'react-bootstrap/Button';
import SignIn from './SigIn-block/SignIn';
import { Container,Row,Col } from 'react-bootstrap';
import {Logo} from './style'; 
import LoginModal from '../../LoginModal';

export default function Header() {
    const [headerItems, setheaderItems]=useState(['CAUSES','IMPACT','JOIN US','ABOUT US']);
    const [loginModalShow, setloginModalShow] = useState(false);
    return (
                <div className="header">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="row align-items-center">
                            <div className="col-4 col-lg-4 col-md-4 col-sm-4">
                            <Logo className="navbar-brand text-uppercase text-center" href="index.html">CSR X</Logo>
                            </div>
                            <div className="col-8 col-lg-8 col-md-8 col-sm-8">
                            <nav className="navbar navbar-expand-lg">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
                                <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="menu">
                                    <ul className="w-100 navbar-nav fs-16 Montserrat-medium">
                                        {
                                        headerItems.map((item,index)=>{
                                        return (
                                        <li className="col-lg-2 col-md-2 col-sm-2 nav-item" key={index}>
                                        <a className="nav-link" href="#">{item}</a>
                                        </li>
                                        )
                                        })
                                        }  
                                        <li className="col-lg-2 col-md-2 col-sm-2 nav-item"><CustomButton color={"#ffffff"} padding={"10px 10px"} content="DONATE" borderRadius={"8px"} backgroundColor={"#F76000"}/></li>
                                        {/* <li className="col-lg-2 col-md-2 col-sm-2 nav-item">
                                        <a className="" href="#" id="navbardrop" data-toggle="dropdown" onClick={() => setloginModalShow(true)}>Sign In</a>
                                        <div className="dropdown-menu text-center">
                                            <a className="dropdown-item" href="index.html">Doner</a>
                                            <a className="dropdown-item" href="index.html">CSR Executive</a>
                                        </div>
                                        </li> */}
                                        <li className="col-lg-2 col-md-2 col-sm-2 nav-item" onClick={() => setloginModalShow(true)}>
                                        <a className="nav-link" href="#">Sign In</a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <LoginModal show={loginModalShow} onHide={() => setloginModalShow(false)} />
                </div>
    );
}