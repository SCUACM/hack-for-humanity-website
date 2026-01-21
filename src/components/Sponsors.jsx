import '../css/Sponsors.css';
import airplaneSticker from '../assets/images/paperairplane.png';
import rocketImg from '../assets/images/rocket.png';
import cioccaLogo from '../assets/images/sponsors/ciocca_center.png';
import crowdStrikeLogo from '../assets/images/sponsors/crowdstrike_logo.png';

function Sponsors() {
    const sponsorsTier1 = [
        {
            id: 0,
            src: cioccaLogo,
            link: "https://www.scu.edu/cioccacenter/"
        },
    ];
    const sponsorsTier2 = [
        {
            id: 0,
            src: "https://upload.wikimedia.org/wikipedia/commons/0/07/ByteDance_logo_English.svg",
            link: "https://www.bytedance.com/en/"
        }
    ];
    const sponsorsTier3 = [
        {
            id: 0,
            src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/AMD_Logo.svg/1280px-AMD_Logo.svg.png",
            link: "https://www.amd.com/"
        }
    ];
    const sponsorsTier4 = [
        {
            id: 0,
            src: crowdStrikeLogo,
            link: "https://www.crowdstrike.com/en-us/"
        }
    ];

    return (
        <section id="sponsors">
            {/* <img src={airplaneSticker} className='sticker plane'></img> */}
            <img src={rocketImg} className='sticker rocket'></img>
            <h2 className='sponsors-title'>Thank you to all our</h2>
            <h1>Sponsors!</h1>

            <div className='sponsors-container'>
                {sponsorsTier1.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier1" key={s.id}/>
                ))}
            </div>
            <div className='sponsors-container'>
                {sponsorsTier2.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier2" key={s.id}/>
                ))}
            </div>
            <div className='sponsors-container'>
                {sponsorsTier3.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier3" key={s.id}/>
                ))}
            </div>
            <div className='sponsors-container'>
                {sponsorsTier4.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier4" key={s.id}/>
                ))}
            </div>
            <p>More to be announced!</p>
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