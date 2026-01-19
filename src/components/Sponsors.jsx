import '../css/Sponsors.css';
import blueWashiTape from '../assets/images/bluewashitape.png';
import starSticker from '../assets/images/star_sticker_border.png';
import rocketImg from '../assets/images/rocket.png';

function Sponsors() {
    return (
        <section id="sponsors">
            <img src={blueWashiTape}></img>
            <img src={starSticker} className='sticker star1'></img>
            <img src={starSticker} className='sticker star2'></img>
            <img src={rocketImg} className='sticker rocket'></img>
            <p>Thank you to all our</p>
            <h1>Sponsors!</h1>

        </section>
    );
}

export default Sponsors;