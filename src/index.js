import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Header from "./components/Common/Header/Header";
import Footer from './components/Common/Footer/Footer';
import Carousel from './components/Common/Carousel/Carousel';
import Title from './components/Common/Title/Title';
import Link from './components/Common/CustomLink/CustomLink';
import DonorDashboard from './pages/Donor-dashboard';
import Causes from './pages/Causes';
import IndividualCause from './pages/IndividualCause';
import CSRExecutive from './pages/CSRExecutive';
import DonorProfile from './pages/DonorProfile';
import Dashboard from './pages/Dashboard';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

const routing = (
        <div>
            <Header />
            {/* <DonorDashboard /> */}
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 content-wrapper">
            <Causes />
            {/* <IndividualCause /> */}
            {/* <Dashboard /> */}
            {/* <CSRExecutive /> */}
            {/* <DonorProfile /> */}
            <Footer />
            </div>
        </div>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
