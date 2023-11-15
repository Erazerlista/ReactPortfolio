import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import LogoS from '../../../assets/images/logo-s.png';
import LogoSubtitle from '../../../assets/images/logo_sub.png';
import './index.scss';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact={true} activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink exact={true} activeClassName="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink exact={true} activeClassName="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/mackenzie-evangelista'>
                    <FontAwesomeIcon icon={['fab', 'linkedin']} color="#4d4d4e" />
                </a>
            </li>
        </ul>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/Erazerlista'>
                    <FontAwesomeIcon icon={['fab', 'github']} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
);

export default Sidebar;
