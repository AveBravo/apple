import React from 'react'   
import { useRef, useEffect } from 'react';

const Hero = () => {
    const videoRef = useRef();
    useEffect(() => {
        if(videoRef.current) videoRef.current.playbackRate = 2;
    }, []);

  return (
    <section id='hero'>
        <div>
            <h1>Mac</h1>
            <img src="/title.png" alt="macbook-pro" />
        </div>

        <video ref={videoRef} src="./videos/hero.mp4" autoPlay muted playsInline />

        <button>Buy Now</button>
        <p>Form $1599 or $124/mo. for 12 months</p>
    </section>
  )
}

export default Hero 