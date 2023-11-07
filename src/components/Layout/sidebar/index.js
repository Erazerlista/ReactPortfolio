import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../../assets/images/logo-s.png'
import LogoSubtitle from '../../../assets/images/logo_sub.png'

const Sidebar = () => (
<div className='nav-bar'>
    <Link className='logo' to='/'>
        <img src={LogoS} alt="logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan" />
    </Link>
    <nav>
    <NavLink exact="true" activeclassname="active" to "/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
    </NavLink>
        <NavLink exact="true" activeclassname="about-link" to "/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
    </NavLink>    <NavLink exact="true" activeclassname="contact-link" to "/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
    </NavLink>
    </nav>
    <ul>
      <li>
        <a target="_blank" rel='norederrer' href='https://www.linkedin.com/in/mackenzie-evangelista'>
            <iconAwesomeIcon icon={<i class="falinkedin" color="4d4d4de"></i>}
            </a></li>  
    </ul>
      <ul>
      <li>
        <a target="_blank" rel='norederrer' href='https://github.com/Erazerlista'>
            <iconAwesomeIcon icon={<i class="faGithub" color="4d4d4de"></i>}
            </a></li>  
    </ul>  
    </div>
)

export default Sidebar