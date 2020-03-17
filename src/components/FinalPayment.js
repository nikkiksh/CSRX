import React from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button,Dropdown} from 'react-bootstrap';
import Title from '../components/Common/Title/Title'

export default function FinalPayment(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <Title name="Cause_Name"/>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 d-flex pt-5 pb-0 pl-0 pr-0">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 p-0">
                <span>Amount:</span><span>500Rs</span>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7">
            <span>Type:</span><span>One - time Donation</span>
            </div>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0 d-flex">
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 p-0">
                <span>Select Payment Method :</span>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 p-0">
                <span className="paymentMode">
                    <Dropdown>
                <Dropdown.Toggle variant="" id="dropdown-basic">
                   UPI
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                </span>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0 d-flex">
              <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 p-0">
                <span>Enter your UPI ID : </span>
              </div>
              <div className="col-lg-7 col-sm-7 col-md-7 col-xs-7">
                <input type="number" className="contributionAmount"/>
              </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="modalCancel">Cancel</Button>
          <Button className="modalProceed">Pay Now</Button>
        </Modal.Footer>
      </Modal>
    );
  }