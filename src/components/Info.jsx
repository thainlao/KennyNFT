import React from "react";
import head from '../assets/kennyshead.png';
import gif from '../assets/gif8.gif';

function Info () {
    return (
        <div className="infobody">
            <div className="flex justify-center h-screen">
                <div className="text-center justify-center items-center flex flex-col gap-6 w-2/3 ">
                <span style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-3xl neon-text text-white font-bold glow-text'>
                    KEENY$ $STORY
                    </span> 
                    <img className="w-48 sm:w-1/4" src={gif} alt="GIF" />
            <span style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-3xl glow-text neon-text text-white font-bold'>
            Keeny: Dies repeatedly.
                    </span>
                    <div className='bubble'><img src={head} alt="Head"></img></div>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-3xl glow-text neon-text text-white font-bold'>
                    Friends: Can't understand him.
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-3xl glow-text neon-text text-white font-bold'>
                    Everyone: Still loves him.
                    </span>
                    <span style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-3xl glow-text neon-text text-white font-bold'>
                    Keeny McCormick from South Park: Dies a lot. Unintelligible but loved by friends. Resilient and fearless. Protective of his sister. Town legend.
                    </span>
                </div>
            </div>
            <div className='bubble'><img src={head} alt="Head"></img></div>
        </div>
    )
}

export default Info