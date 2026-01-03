import { useState } from 'react';
import '../css/About.css';
import carouselImage1 from '../assets/images/carousel-image1.jpg';
import carouselImage2 from '../assets/images/carousel-image2.jpg';
import carouselImage3 from '../assets/images/carousel-image3.jpg';
import carouselImage4 from '../assets/images/carousel-image4.jpg';
import carouselImage5 from '../assets/images/carousel-image5.jpg';
import carouselWashiTape from '../assets/images/squarewashitape.png';

function About() {
    const [index, setIndex] = useState(0);
    const images = [
        {
            imgSrc: carouselImage1,
            altText: "H4H organizers and judges with H4H merch"
        },
        {
            imgSrc: carouselImage2,
            altText: "Student team working together on project"
        },
        {
            imgSrc: carouselImage3,
            altText: "Students gathered around fire eating s'mores"
        },
        {
            imgSrc: carouselImage4,
            altText: "Student team smiling at camera during H4H"
        },
        {
            imgSrc: carouselImage5,
            altText: "Many students sitting in Locatelli working on H4H projects"
        }
    ];

    const handlePrevButton = () => {
        if (index-1 < 0) {
            setIndex(images.length-1);
        } else {
            setIndex(index-1);
        }
    };
    const handleNextButton = () => {
        if (index+1 >= images.length) {
            setIndex(0);
        } else {
            setIndex(index+1);
        }

    };

    return (
        <section id="about">
            <div className='about-title'>
                <h2>About</h2>
            </div>
            <p>
                Hack for Humanity is an opportunity to identify and solve pressing social issues using your creativity and code. We host a series of workshops, bring experienced mentors, and create networking opportunities with industry professionals. Come enjoy the free food, free merch, and exciting events planned!
            </p>
            <div className='carousel'>
                <button onClick={handlePrevButton} className='left-arrow'></button>
                <img src={images[index].imgSrc} alt={images[index].altText} className='carousel-image'></img>
                <img src={carouselWashiTape} className='carousel-tape'></img>
                <p className='image-counter'>{index+1}/{images.length}</p>
                <button onClick={handleNextButton}></button>
            </div>
        </section>
    );
}

export default About;