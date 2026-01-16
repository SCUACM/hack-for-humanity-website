import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faDiscord, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import '../css/Footer.css';
import H4HLogo from '../assets/images/h4h_logo_glowing.png';

function Footer() {
    const acmSocials = [
        {
            icon: faInstagram,
            link: "https://www.instagram.com/scu_acm/",
            id: 1,
            color: "#E1316D"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/company/scuacm/",
            id: 2,
            color: "#0E77A9"
        },
        {
            icon: faDiscord,
            link: "https://discord.gg/aXkQWvVFaw",
            id: 3,
            color: "#7389DB"
        }
    ];
    const acmwSocials = [
        {
            icon: faInstagram,
            link: "https://www.instagram.com/scuacmw/",
            id: 4,
            color: "#E1316D"
        },
        {
            icon: faLinkedin,
            link: "https://www.linkedin.com/company/acm-w-santa-clara-university-chapter/",
            id: 5,
            color: "#0E77A9"
        }
    ]
    return (
        <section id="footer">
            <img className='footer-logo' src={H4HLogo}></img>
            <SocialsList title={"SCU ACM"} socials={acmSocials} mainSite={"https://scuacm.com/"}/>
            <SocialsList title={"SCU ACM-W"} socials={acmwSocials} mainSite={"https://scuacmw.com/"}/>
        </section>
    );
}

function SocialsList({title, socials, mainSite}) {
    return (
        <div className='social-container'>
            <h3>Connect with <a href={mainSite} className='main-site-link' target="_blank" rel="noopener noreferrer">{title}</a></h3>
            <div className='icons-container'>
                {socials.map((s) => (
                    <a href={s.link} target="_blank" rel="noopener noreferrer" key={s.id} className='social-link'>
                        <FontAwesomeIcon className='social-icon' icon={s.icon} style={{ "--icon-color": s.color}}/>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;