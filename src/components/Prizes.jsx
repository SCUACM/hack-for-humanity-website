import '../css/Prizes.css';
import firstPlace from '../assets/images/first_place.PNG';
import secondPlace from '../assets/images/second_place.PNG';
import thirdPlace from '../assets/images/third_place.PNG';
import littleSprout from '../assets/images/little_sprout.png';
import gradCap from '../assets/images/grad_cap.png';

function Prizes() {
  return (
    <section id="prizes">
      <div className='prizes-title'>
        <h2>Prizes</h2>
      </div>
      
      <div className='top-prizes'>
        <div className='prize-item'>
          <img src={secondPlace} alt="Second place sun icon" className='prize-icon'/>
          <p className='prize-text'>2nd place: TBD</p>
        </div>
        
        <div className='prize-item'>
          <img src={firstPlace} alt="First place trophy icon" className='prize-icon'/>
          <p className='prize-text'>1st place: TBD</p>
        </div>
        
        <div className='prize-item'>
          <img src={thirdPlace} alt="Third place trophy icon" className='prize-icon'/>
          <p className='prize-text'>3rd place: TBD</p>
        </div>
      </div>
      
      <div className='additional-prizes-title'>
        <h3>additional prizes</h3>
      </div>
      
      <div className='special-prizes'>
        <div className='special-prize green-box'>
          <p>Best<br/>Freshmen Hack:<br/>TBD</p>
          <img src={littleSprout} alt="sprout" className='sprout-left'/>
          <img src={littleSprout} alt="sprout" className='sprout-right'/>
        </div>
        
        <div className='special-prize blue-box'>
          <p>Best Hack by<br/>Women-in-<br/>Tech: TBD</p>
        </div>
        
        <div className='special-prize green-box graduate-box'>
          <p>Best Graduate<br/>Hack: TBD</p>
          <img src={gradCap} alt="graduation cap" className='grad-cap'/>
        </div>
      </div>
      
      <div className='ctf-prize'>
        <p>
          <strong>Bronco Security Sponsored Capture the Flag<br/>
          (CTF) Cybersecurity Challenge:</strong><br/>
          First Place BroncoSec CTF Prize: TBD<br/>
          Second Place BroncoSec CTF Prize: TBD<br/>
          Third Place BroncoSec CTF Prize: TBD
        </p>
      </div>
    </section>
  );
}

export default Prizes;