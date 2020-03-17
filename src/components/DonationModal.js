import React,{useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import {Button,Tabs,Tab} from 'react-bootstrap';
import Title from '../components/Common/Title/Title'
import FinalPayment from './FinalPayment';

export default function DonationModal(props) {
    const [finalPaymentModalShow, setfinalPaymentModalShow] = useState(false);
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
        <Tabs defaultActiveKey="donateOnce" id="uncontrolled-tab-example">
        <Tab eventKey="donateOnce" title="Donate Once" className="donateOnce">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0">
            <span>Enter the amount you want to contribute:</span>
            <input type="number" className="contributionAmount"/>
            <span className="fontStyle">Rs</span>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0">
            <span>Would you like to keep your donation anonymous :</span>
            <span>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>
            </span>
            <span className="toggleStatus">No</span>
          </div>
        </Tab>
        <Tab eventKey="donateRegularly" title="Donate Regularly">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0">
            <span>You would like to contribute once every :</span>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0">
            <input type="radio" className="contributionAmount1"/><span className="pl-1">1 month</span>
            <input type="radio" className="contributionAmount2"/><span className="pl-1">1 month</span>
            <input type="radio" className="contributionAmount3"/><span className="pl-1">1 month</span>
            <input type="radio" className="contributionAmount4"/><span className="pl-1">1 month</span>
            </div>
          </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0">
            <span>Enter the amount you want to contribute:</span>
            <input type="number" className="contributionAmount"/>
            <span className="fontStyle">Rs</span>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 pt-5 pb-0 pl-0 pr-0">
            <span>Would you like to keep your donation anonymous :</span>
            <span>
            <label class="switch">
                <input type="checkbox"/>
                <span class="slider round"></span>
                </label>
            </span>
            <span className="toggleStatus">No</span>
          </div>
        </Tab>
        </Tabs>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="modalCancel">Cancel</Button>
          <Button className="modalProceed" onClick={() => setfinalPaymentModalShow(true)}>Proceed</Button>
        </Modal.Footer>
        <FinalPayment show={finalPaymentModalShow} onHide={() => setfinalPaymentModalShow(false)} />
      </Modal>
    );
  }