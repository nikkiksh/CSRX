import React from 'react';
import '../styles/css/Dashboard.scss';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'
import Title from '../components/Common/Title/Title';

const Hexagon=styled.div`
width: 100%;
height: 100%;
background-repeat: no-repeat;
background-position: 50%;
background-size: cover;
background-image:url(${props => props.imageUrl ? props.imageUrl : ""});
visibility: visible;
transform: rotate(-60deg);
`; 
const PositionAbsolute=styled.div`
position:absolute;
top:${props => props.top?props.top:'0'};
right:${props => props.right?props.right:'0'};
left:${props => props.left?props.left:'0'};
`;

export default function Dashboard(){
    return(
        <div className="DashboardWrapper">
             <section className="banner">
    <div id="bannerSlider" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../images/banner.png")} alt=""/>
            <div className="carousel-caption">
             <p className="fs-80 Montserrat-bold">What did the <br/>Universe tell you ?</p>  
             <p className="fs-22 fs-sm-16 color-black pb-60">Help the world become a better place by helping one life at a time. Leverage our platform to
                  help John with his schooling, Jenny in her fight against malaria and countless more with their own inspiring challenges…</p>           
                <div className="text-right"><a className="changelives" href="#">Change Lives Today  <FontAwesomeIcon icon={faArrowCircleRight} /></a></div>
            </div>   
          </div>      
        </div>        
      </div>
</section>
<section className="causes">
    <div className="grey-bcg">
        <div className="container-fluid">
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <h1 className="heading-title text-left"><span className="Montserrat-bold">300+</span> Opportunities for you to <br/> make a difference</h1></div>
                     
                    </div>
            </div>
        </div>
        {/* <img src={require("../images/sect2-pic.png")} className="w-100" alt="images" /> */}
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 opportunities-div d-flex">
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
            <PositionAbsolute top={"167px"} left={"80px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon className="">
                        para
                    </Hexagon>
                    </div>
                    </PositionAbsolute>
            </div>
            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">

            <PositionAbsolute top={"40px"} right={"0px"} left={"0px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon imageUrl='../images/opportunity1.png' className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
                <PositionAbsolute top={"285px"} right={"0px"} left={"0px"} className="hexagon hexagon1 ">
                <div className="hexagon-in1">
                    <Hexagon imageUrl={"/static/media/cause-image.4a25f347.png"} className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
                <PositionAbsolute top={"167px"} left={"211px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon imageUrl={"/static/media/cause-image.4a25f347.png"} className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
                <PositionAbsolute top={"40px"} left={"425px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon imageUrl={"/static/media/cause-image.4a25f347.png"} className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
                <PositionAbsolute top={"285px"} left={"425px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon imageUrl={"/static/media/cause-image.4a25f347.png"} className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
                <PositionAbsolute top={"167px"} left={"625px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon imageUrl={"/static/media/cause-image.4a25f347.png"} className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
                <PositionAbsolute top={"-80px"} left={"625px"} className="hexagon hexagon1">
                <div className="hexagon-in1">
                    <Hexagon imageUrl={"/static/media/cause-image.4a25f347.png"} className="">
                    </Hexagon>
                </div>
                </PositionAbsolute>
            </div>

        </div>
    </div>
</section>
<section className="little pb-80">
    <div className="grey-bcg">
        <div className="container-fluid">
            <div className="col-12">
                <div className="row">
                    <div className="col-12 col-lg-12 col-sm-12 col-md-12">
                        {/* <h1 className="heading-title text-left">Little droplets do make an ocean</h1> */}
                        <Title name="Little droplets do make an ocean" fontSize="60px"/>
                    <h5>And this is the impact of our droplets….</h5>
                    </div>
                 </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="col-12">
            <div className="row">
                <div className="col-12 col-lg-5 col-sm-5 col-md-5 pt-40">
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
                <div className="col-12 col-lg-6 col-sm-6 col-md-6 pt-70">
                    <p className="fs-68 text-left Montserrat-bold color-707070">Leveraging Blockchain</p>
                    <p className="text-left">Lorem Ipsum Dolor SIt Amaet is blhjaoshjd opjhsiaf fioashfa fopaf 0[af om pifpaf apr [aepk als as[pkc[pavk ap[v kniv dv pojsa co0pajv [sapkcp;sajv po[aiv[samvo auv90av pavida vada v0da</p>
                    <p className="text-left"> v-i 0vep vde Lorem Ipsum Dolor SIt Amaet is blhjaoshjd opjhsiaf fioashfa fopaf 0[af om pifpaf apr
                         [aepk als as[pkc[pavk ap[v kniv dv pojsa co0pajv [sapkcp;sajv po[aiv[samvo auv90av</p>
                         <div className="text-right pt-70"><a className="changelives" href="#">Find Out More <FontAwesomeIcon icon={faArrowCircleRight} /></a></div>
           
                </div>
         </div>
      </div>
 </div>
</section>
        </div>
    )
}