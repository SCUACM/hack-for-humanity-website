import '../css/Sponsors.css';
// import airplaneSticker from '../assets/images/paperairplane.png';
import rocketImg from '../assets/images/rocket.png';
import cioccaLogo from '../assets/images/ciocca_center.png';
import crowdStrikeLogo from '../assets/images/crowdstrike_logo.png';
import bytedanceLogo from '../assets/images/ByteDance_logo.svg';
import amdLogo from '../assets/images/amd_logo.svg';
import elevenlabsLogo from '../assets/images/elevenlabs-logo-black.svg';
import webspatialLogo from '../assets/images/webspatial-transparent.svg';
import markkulaLogo from '../assets/images/markkula_logo.png';

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
            src: bytedanceLogo,
            link: "https://www.bytedance.com/en/"
        },
        {
            id: 1,
            src: webspatialLogo,
            link: "https://webspatial.dev/"
        }
    ];
    const sponsorsTier3 = [
        {
            id: 0,
            src: amdLogo,
            link: "https://www.amd.com/"
        }
    ];
    const sponsorsTier4 = [
        {
            id: 0,
            src: crowdStrikeLogo,
            link: "https://www.crowdstrike.com/en-us/"
        },
        {
            id: 1,
            src: elevenlabsLogo,
            link: "https://elevenlabs.io/"
        },
        {
            id: 2,
            src: markkulaLogo,
            link: "https://www.scu.edu/ethics/"
        }
    ];

    return (
        <section id="partners">
            {/* <img src={airplaneSticker} className='sticker plane'></img> */}
            <img src={rocketImg} className='sticker rocket'></img>
            <h2 className='partners-title'>Thank you to all our</h2>
            <h1>Sponsors!</h1>

            <div className='partners-container'>
                {sponsorsTier1.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier1" key={s.id}/>
                ))}
            </div>
            <div className='partners-container'>
                {sponsorsTier2.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier2" key={s.id}/>
                ))}
            </div>
            <div className='partners-container'>
                {sponsorsTier3.map((s) => (
                    <SponsorCard logoSrc={s.src} sponsorLink={s.link} sponsorTier="tier3" key={s.id}/>
                ))}
            </div>
            <div className='partners-container'>
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
                <img src={logoSrc} className='sponsor-logo' alt='sponsor logo'/>
            </div>
        </a>
    );
}

export default Sponsors;