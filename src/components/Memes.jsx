import React, { useState } from 'react';
import gif5 from '../assets/applauding_dicaproi.gif';
import gif1 from '../assets/applausekenny.gif';
import gif2 from '../assets/gif3.gif';
import gif3 from '../assets/gif4.gif';
import gif4 from '../assets/gif5.gif';
import head from '../assets/kennyshead.png';

function Memes () {
    const gifs = [
        gif1,
        gif2
    ]

    const [currentGifIndex, setCurrentGifIndex] = useState(0);

  const handleButtonClick = () => {
    setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
  };

    return (
        <div className="memesbody"><div className='bubble'><img src={head} alt="Head"></img></div>
            <div className='flex justify-center items-center flex-col min-h-screen gap-5'>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-xl sm:text-5xl neon-text text-white font-bold w-auto sm:text-md'>
                    make sure to make keeny happy.
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-xl sm:text-5xl neon-text text-white font-bold w-auto sm:text-md'>
                    Click it
                    </span>
                    <div className="container">
      <a className="button cursor-pointer" onClick={handleButtonClick}>
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">$ KEENY $ </span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </div>
    <img src={gifs[currentGifIndex]} alt="Current GIF" className="w-[150px] sm:w-[220px]" />
            </div>
        </div>
    )
}

export default Memes;