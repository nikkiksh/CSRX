import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';
import Title from '../components/Common/Title/Title';

const ThoughtsWrapper = styled.div`
padding:0 88px;
`;

const PositionAbsolute =styled.div`
position: absolute;
top: 100px;
left: 133px;
;
`;
const NameWrapper=styled.div`
background-color:#f8f8f8`;

const cardContent=[
    {content:"Educating two kids from Malvani",supporters:"303 Supporters",imageURI:"cause-image.png"},
    {content:"Educating two kids from Malvani",supporters:"303 Supporters",imageURI:"cause-image.png"}
]
const thoughts=[
    {content:"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dol",imageURI:"cause-image.png"},
    {content:"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dol",imageURI:"cause-image.png"},
    {content:"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dol",imageURI:"cause-image.png"},
    {content:"Lorem ipsum dolor sit amet, consectetur adipiscing eiusmod tempor incididunt ut labore et dolore magna ad minim veniam, quis nostrud exercitation ullamco aliquip ex ea commodo consequat. Duis aute irure reprehenderit in voluptate velit esse cillum dol",imageURI:"cause-image.png"}
]
export default function DonorProfile(){
    return(
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pl-0 pr-0">
            <NameWrapper className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 float-left">
                    <Button>Back</Button>
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 d-flex">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">

                    </div>
                    <div className="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                        <Title name="John_donor" margin={"0"}/>
                        <Title name="Has supported 53 causes" fontSize={"24px"}/>
                    </div>
                </div>
                </NameWrapper>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 d-flex">
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pt-3 pr-5">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </div>
                <PositionAbsolute className="hexagon donorProfileHexagon">
                    <div className="hexagon-in1">
                        <div className="hexagon-in2">
                        </div>
                    </div>
                </PositionAbsolute>
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5">
                    <Title name="His Impact" fontSize={"36px"} fontFamily={"Montserrat-Bold"}/>

                </div>
        </div>
    )
}