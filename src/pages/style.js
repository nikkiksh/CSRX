import React from 'react';
import styled from 'styled-components';
 
export const StickyDiv=styled.div`
position:fixed;
width:100%;
z-index:999;
background-color:#F8F8F8;
padding:40px 0 30px 0; 
align-items:baseline;
@media only screen and (max-width:1024px){
    padding:25px 0 20px 0;  
}
`;
 
export const PositionRelative=styled.div`
position:relative;
display:flex;
flex-wrap:wrap;
background-color:#f8f8f8;
padding:9% 0 0 0;
`;