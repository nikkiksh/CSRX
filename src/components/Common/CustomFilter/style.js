import React from 'react';
import styled from 'styled-components';
 
export const SelectStyle=styled.select`
border: none;font-weight:700;
text-indent: 1px;
text-overflow: ''; 
width: 125px;
-webkit-appearance: none;
-moz-appearance: none;
appearance: none;
padding: 2px 2px 2px 10px;
background: transparent url("../../images/down-arrow.svg") no-repeat right;
background-size: 25px 15px;
@media only screen and (max-width:1400px){
    width: 90px;
}
`;
 
export const LabelStyle=styled.label`
margin-bottom: 0;
`