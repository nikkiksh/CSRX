import React from 'react';
import styled from 'styled-components';

export const CustomImageStyle=styled.img`
border-radius:${props => props.borderRadius ? props.borderRadius : "none"};
margin-right:${props => props.margin ? props.margin : "none"}
`;
