import { useEffect, useState } from 'react';
import '../css/Home.css';
import earthSticker from '../assets/images/earth_sticker.png';
import rocketSticker from '../assets/images/rocket_sticker_border.png';
import starSticker from '../assets/images/star_sticker_border.png';

function Home() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    function updateCountdown() {
        const ms = new Date("2026-02-28T17:00:00Z").getTime() - new Date().getTime();
        // console.log(ms);
        if (ms <= 0) {
            setDays(0);
            setHours(0);
            setMinutes(0);
            setSeconds(0);
            return;
        }
        setDays(Math.floor(ms / (1000 * 60 * 60 * 24)));
        setHours(Math.floor(ms % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        setMinutes(Math.floor(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) / (1000 * 60)));
        setSeconds(Math.floor(ms % (1000 * 60 * 60 * 24) % (1000 * 60 * 60) % (1000 * 60) / 1000));
    }

    useEffect(() => {
        updateCountdown(); // run once on mount
        const intervalId = setInterval(updateCountdown, 1000);
        return () => {clearInterval(intervalId)};
    },[]);

    return (
        <section id='home'> 
            <div className='text-block'>
                <h1>Hack for<br/>Humanity</h1>
                <p>Feb 28 - Mar 1, 2026 • In-Person</p>
                <div className='signup-button'>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSfTwDfNLT_qFDvWyBuL4kmmLOmNJX3BgCw29D5T_NyWG6a_Aw/viewform' className='signup-link' target="_blank" rel="noopener noreferrer">Sign Up Now!</a>
                </div>
                 <img src={earthSticker} className='earth-sticker'></img>
                 <img src={rocketSticker} className='rocket-sticker'></img>
                 <img src={starSticker} className='star-sticker1'></img>
                 <img src={starSticker} className='star-sticker2'></img>
            </div>
            <div className='countdown'>
                <p>Countdown till Hackathon!</p>
                <span>
                    <span className='countdown-number'>{String(days).padStart(2, '0')} </span> d 
                    <span className='countdown-number'> {String(hours).padStart(2, '0')} </span> hr
                    <span className='countdown-number'> {String(minutes).padStart(2, '0')} </span> min 
                    <span className='countdown-number'> {String(seconds).padStart(2, '0')} </span> sec
                </span>
            </div>
        </section>
    );
}

export default Home;