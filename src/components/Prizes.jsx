import '../css/Prizes.css';
import firstPlace from '../assets/images/first_place.PNG';
import secondPlace from '../assets/images/second_place.PNG';
import thirdPlace from '../assets/images/third_place.PNG';
import littleSprout from '../assets/images/little_sprout.png';
import gradCap from '../assets/images/grad_cap.png';
import aiIcon from '../assets/images/AI.png';
import elevenLabsIcon from '../assets/images/elevenlabs.png';
import bytedanceIcon from '../assets/images/ByteDance_logo.svg';
import gameControllerIcon from '../assets/images/video_game_controller.png';
import amdIcon from '../assets/images/amd_logo.svg';

function Prizes() {
  return (
    <section id="prizes">
      <div className='prizes-title'>
        <h2>Prizes</h2>
      </div>
      <div className='top-prizes'>
        <div className='prize-item'>
          <img src={secondPlace} alt="Second place sun icon" className='prize-icon'/>
          <p className='prize-text'>2nd place: $1750</p>
        </div>
        <div className='prize-item'>
          <img src={firstPlace} alt="First place trophy icon" className='prize-icon'/>
          <p className='prize-text'>1st place: $2250</p>
        </div>
        <div className='prize-item'>
          <img src={thirdPlace} alt="Third place trophy icon" className='prize-icon'/>
          <p className='prize-text'>3rd place: $1500</p>
        </div>
      </div>
      <div className='additional-prizes-title'>
        <h3>additional prizes</h3>
      </div>
      <div className='special-prizes'>
        {/* Sponsored Prizes Row */}
        <div className='sponsored-row'>
          <div className='special-prize blue-box webspatial-box sponsored'>
            <p className='prize-title'>Best Use of<br/>WebSpatial:<br/>$1000</p>
            <div className='sponsor-section'>
              <p className='sponsor-text'>sponsored by</p>
              <img src={bytedanceIcon} alt="ByteDance icon" className='bytedance-icon'/>
            </div>
          </div>
          <div className='special-prize blue-box elevenlabs-box sponsored'>
            <p className='prize-title'>Best Project<br/>Built w/ ElevenLabs:<br/>6 months of Scale Tier</p>
            <div className='sponsor-section'>
              <p className='sponsor-text'>sponsored by</p>
              <img src={elevenLabsIcon} alt="ElevenLabs icon" className='elevenlabs-icon'/>
            </div>
          </div>
          <div className='special-prize blue-box amd-box sponsored'>
            <p className='prize-title'>Best Use of AMD<br/>Technology:<br/>$1000</p>
            <div className='sponsor-section'>
              <p className='sponsor-text'>sponsored by</p>
              <img src={amdIcon} alt="AMD icon" className='amd-icon'/>
            </div>
          </div>
        </div>

        {/* Regular Prizes - 2 rows of 3 */}
        <div className='regular-prizes-grid'>
          <div className='special-prize green-box'>
            <p>Best<br/>Freshmen Hack:<br/>$1000</p>
            <img src={littleSprout} alt="sprout" className='sprout-left'/>
            <img src={littleSprout} alt="sprout" className='sprout-right'/>
          </div>
          <div className='special-prize green-box'>
            <p>Best Hack by<br/>Womxn-in-Tech:<br/>$1000</p>
          </div>
          <div className='special-prize green-box graduate-box'>
            <p>Best Graduate<br/>Hack:<br/>$1000</p>
            <img src={gradCap} alt="graduation cap" className='grad-cap'/>
          </div>
          <div className='special-prize green-box unicorn-box'>
            <p>Best<br/>Future Unicorn<br/>Award:<br/>$1000</p>
          </div>
          <div className='special-prize green-box rai-box'>
            <p>Best Use of<br/>Responsible AI:<br/>$750</p>
            <img src={aiIcon} alt="AI icon" className='ai-icon'/>
          </div>
          <div className='special-prize green-box play-box'>
            <p>Best in Play:<br/>$750</p>
            <img src={gameControllerIcon} alt="Game controller icon" className='game-controller-icon'/>
          </div>
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