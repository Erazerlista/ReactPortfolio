import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoTitle from '../../../assets/images/Logo-s.png';
import './index.scss';
import AnimatedLetters from '../AnimatedLetter';
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const nameArray = ['e', 'v', 'a', 'n', 'g', 'e', 'l', 'i', 's', 't', 'a'];
    const jobArray = ['u', 'x', '', 'd', 'e', 's', 'i', 'g', 'n', 'e', 'r'];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass}_12`}>i,</span>
                    <br />
                    <span className={`${letterClass}_13`}>I</span>
                    <span className={`${letterClass}_14`}>'m</span>
                    <img src={LogoTitle} alt="developer" />
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} />
                </h1>
                <h2>FrontEnd Developer and UX Designer</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
            <Logo />
        </div>
    );
};

export default Home;
