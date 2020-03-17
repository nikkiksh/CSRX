import React from 'react';
import Button from 'react-bootstrap/Button';
import './Signin.scss';

export default function SignIn(){
    return(
        <span>
            <img className="search" src="" alt="search-icon"/>
            <img className="sign-in" src="" alt="sign-in"/>
            <Button variant="link">Sign In</Button>
        </span>
    )
}