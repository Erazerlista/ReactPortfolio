import React from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../../assets/images/Logo-s.png';
import './index.scss';

const Home = () => (
    <div className="container home-page">
        <div className="text-zone">
            <h1>
                Hi, <br /> I'm
                <img src={LogoTitle} alt="developer" />
                mackenzie
                <br />
                developer
            </h1>
            <h2>FrontEnd Developer and UX Designer</h2>
            <Link to="/contact" className="flat-button">
                CONTACT ME
            </Link>
        </div>
    </div>
);

export default Home;
