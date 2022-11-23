import React, { useEffect } from 'react';
import imagePLaceholder from '../assets/sufyan-fL3ft7155kE-unsplash.jpg';
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
        threshold: 0.4, // play around with this to see what percentage should be intercepted before the images become visible
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
        <img src={imagePLaceholder} className='img' alt='image palceholder' />
      </div>
      <div className='ImageContainer'>
        <img src={imagePLaceholder} className='img' alt='image palceholder' />
      </div>
    </div>
  );
}
