import '../css/Sponsors.css';
import blueWashiTape from '../assets/images/bluewashitape.png';
import starSticker from '../assets/images/star_sticker_border.png';
import rocketImg from '../assets/images/rocket.png';
import cioccaLogo from '../assets/images/sponsors/ciocca_center.png';

function Sponsors() {
    const sponsors = [
        {
            id: 0,
            src: cioccaLogo,
            link: "https://www.scu.edu/cioccacenter/",
            tier: 1
        },
        {
            id: 1,
            src: "https://upload.wikimedia.org/wikipedia/commons/0/07/ByteDance_logo_English.svg",
            link: "https://www.bytedance.com/en/",
            tier: 1
        }
    ];


    return (
        <section id="sponsors">
            <img src={starSticker} className='sticker star1'></img>
            <img src={starSticker} className='sticker star2'></img>
            <img src={rocketImg} className='sticker rocket'></img>
            <h2 className='sponsors-title'>Thank you to all our</h2>
            <h1>Sponsors!</h1>

            <div className='sponsors-container'>
                {sponsors.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier={"tier"+s.tier} key={s.id}/>
                ))}
            </div>
        </section>
    );
}

function SponsorCard({logoSrc, sponsorLink, sponsorTier}) {
    return (
        <a href={sponsorLink} target="_blank" rel="noopener noreferrer" className={`sponsor-link  ${sponsorTier}`}>
            <div className='sponsor-card '>
                <img src={logoSrc} className='sponsor-logo'></img>
            </div>
        </a>
    );
}

export default Sponsors;