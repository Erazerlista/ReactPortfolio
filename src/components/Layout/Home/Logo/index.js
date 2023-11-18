import './index.scss';
import LogoS from '../../../../assets/images/LogoS.png';
import { useEffect, useRef } from 'react';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';
import gsap from 'gsap-trial';

const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();

    useEffect(() => {
        gsap.registerPlugin(DrawSVGPlugin);

        gsap.timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .fromTo(
                solidLogoRef.current,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    delay: 3,
                    duration: 3,
                }
            )
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 10,
            });
    }, []);

    return (
        <div className="logo-container" ref={bgRef}>
            <img ref={solidLogoRef} className="solid-logo" src={LogoS} alt="S" />
            <svg
                width="559pt"
                height="897pt"
                version="1.0"
                viewBox="0 0 559 897"
                xmlns="html://www.w3.org/2000/svg"
            >
                <g
                    className="svg-container"
                    transform="translate(0 457) scale(.1 -.1)"
                    fill="none"
                >
                    <path d="m2930 4560c-244-16-623-85-915-228-231-114-241-600-436-61-60-145-"/>
                    {/* use ref to complete the number */}
                </g>
            </svg>
        </div>
    );
};

export default Logo;
