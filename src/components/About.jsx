import React from "react";
import head from '../assets/kennyshead.png';
import gif from '../assets/giphy.gif';

function About () {
    const data = [
        { label: 'Vested Pre-sale', percentage: 30, color: '#FF6384' },
        { label: 'Liquidity', percentage: 40, color: '#36A2EB' },
        { label: 'Airdrop', percentage: 5, color: '#FFCE56' },
        { label: 'Marketing', percentage: 10, color: '#4BC0C0' },
        { label: 'CEX', percentage: 10, color: '#9966FF' }
      ];

      const calculateOffset = (percentage) => 100 - (percentage / 100) * 100;
      
    return (
        <div className="aboutbody">
            <div className="flex justify-center items-center h-2/4">
            <div className='text-center container mx-auto'>
            <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-4xl sm:text-6xl heading text-white font-bold expand'>
                        What's going on here?!?!?
                    </h1>
                </div><div className='bubble'><img src={head} alt="Head"></img></div>
            </div>
            <div className="flex justify-center items-center h-1/4 flex-col gap-6">
            <img className="w-64 sm:w-1/4" src={gif} alt="GIF" />
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-bold w-auto sm:text-md'>
                    Supply 69,000,000,000
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    30% Pre sale
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    40% liquidity
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    5% team
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    5% airdrop
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    10% marketing
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    10% cex
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-base sm:text-3xl neon-text text-white font-light w-auto sm:text-md'>
                    buy/sell tax 0%
                    </span>
            </div>
        </div>
    )
}

export default About;