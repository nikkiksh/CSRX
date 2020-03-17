import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button,Form} from 'react-bootstrap';
import {Logo} from './Common/Header/style'; 

export default function LoginModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          <Logo className="navbar-brand text-uppercase text-center" href="index.html">CSR X</Logo>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 d-flex">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <p>Please enter your credentials</p>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="E-mail Address" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Your Password" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Keep me signed in" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Login
                        </Button>
                        </Form>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 d-flex">
                <div className="hexagon loginhexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                <div className="hexagon loginhexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                <div className="hexagon loginhexagon1"><div className="hexagon-in1"><div className="hexagon-in2"></div></div></div>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    );
  }