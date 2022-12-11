import React, { useEffect } from 'react';
import imagePLaceholder from '../assets/sufyan-fL3ft7155kE-unsplash.jpg';
import imagePLaceholder2 from "../assets/igor-sporynin-UThidBq48xo-unsplash.jpg"
import imagePLaceholder3 from "../assets/peter-herrmann-6e4ze29bFd4-unsplash.jpg"
import './ImageContainer.css';

export default function ImageContainer() {
  const onScreen = () => {
    const containers = document.querySelectorAll('.ImageContainer');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.6, // play around with this to see what percentage should be intercepted before the images become visible
      }
    );

    containers.forEach((container) => {
      observer.observe(container);
    });
  };

  useEffect(() => {
    onScreen();
  });

  return (
    <div className='container'>
      <div className='ImageContainer'>
        <p className='imageText'>Text</p>
        <img src={imagePLaceholder} className='img' alt='image palceholder' />
      </div>
      <div className='ImageContainer'>
      <p className='imageText'>Text</p>
        <img src={imagePLaceholder2} className='img' alt='image palceholder' />
      </div>
      <div className='ImageContainer'>
      <p className='imageText'>Text</p>
        <img src={imagePLaceholder3} className='img' alt='image palceholder' />
      </div>
    </div>
  );
}
