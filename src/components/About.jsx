import { useState, useEffect } from 'react';
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
            id: 0,
            imgSrc: carouselImage1,
            altText: "H4H organizers and judges with H4H merch"
        },
        {
            id: 1,
            imgSrc: carouselImage2,
            altText: "Student team working together on project"
        },
        {
            id: 2,
            imgSrc: carouselImage3,
            altText: "Students gathered around fire eating s'mores"
        },
        {
            id: 3,
            imgSrc: carouselImage4,
            altText: "Student team smiling at camera during H4H"
        },
        {
            id: 4,
            imgSrc: carouselImage5,
            altText: "Many students sitting in Locatelli working on H4H projects"
        }
    ];

    const handlePrevButton = () => {
        setIndex((index + images.length - 1) % images.length);
    };
    const handleNextButton = () => {
        setIndex((index + 1) % images.length);
    };
    const goToImage = () => {

    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((index+1) % images.length);
        }, 3000);
        return () => {
            clearInterval(intervalId);
        };
    },[index, images.length]);

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
                {images.map((img) => (
                    <img src={img.imgSrc} alt={img.altText} className={index === img.id ? 'carousel-image' : 'carousel-image-hidden'} key={img.id}></img>
                ))}
                <img src={carouselWashiTape} className='carousel-tape'></img>
                {/* <p className='image-counter'>{index+1}/{images.length}</p> */}
                <div className='image-counter'>
                    {images.map((img) => (
                        <div key={img.id} className={`dot ${index === img.id ? 'active' : ''}`} onClick={goToImage}></div>
                    ))}
                </div>
                <button onClick={handleNextButton}></button>
            </div>
        </section>
    );
}

export default About;