import React from 'react';
import '../css/Stats.css';
import pictureOne from '../assets/images/picture_one.jpg';
import pictureTwo from '../assets/images/picture_two.jpg';
import pictureThree from '../assets/images/third_picture.jpg';
import pictureFour from '../assets/images/fourth_picture.jpg';
import pictureFive from '../assets/images/picture_five.jpg';

function Stats() {
  return (
    <section id="stats">
      <div className='green-bar'></div>
      <h2>LAST YEAR...</h2>
      
      <div className='stats-container'>
        <div className='stats-row'>
          <div className='stat-card'>
            <img src={pictureOne} alt="Stat visual" className='stat-image'/>
            <p className='stat-text'>300+<br/>Hackers</p>
          </div>
          
          <div className='stat-card'>
            <img src={pictureTwo} alt="Stat visual" className='stat-image'/>
            <p className='stat-text'>9th<br/>year</p>
          </div>
          
          <div className='stat-card'>
            <img src={pictureThree} alt="Stat visual" className='stat-image'/>
            <p className='stat-text'>$10000+ in<br/>prizes</p>
          </div>
        </div>
        
        <div className='stats-row'>
          <div className='stat-card'>
            <img src={pictureFive} alt="Stat visual" className='stat-image'/>
            <p className='stat-text'>50+<br/>submissions</p>
          </div>
          
          <div className='stat-card'>
            <img src={pictureFour} alt="Stat visual" className='stat-image'/>
            <p className='stat-text'>20+<br/>industry judges</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;