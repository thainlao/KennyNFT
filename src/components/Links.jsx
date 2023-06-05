import React from "react";
import twitter from '../assets/icons8-twitter-50.png';
import telegram from '../assets/icons8-telegram-50.png';
import etherscan from '../assets/etherscan-logo-circle-light.png';
import uniswap from '../assets/icons8-uniswap-64.png';
import head from '../assets/kennyshead.png';

function Links () {
    return (
        <div className="linksbody flex justify-center items-center">
            <div className="gap-10 flex">
                    <a href="https://t.me/keenyerc">
                        <img className ="w-12 h-12 expand-on-hover" src={telegram} alt="Telegram"></img>
                    </a>
                    <a href="https://twitter.com/keeny_erc20">
                    <img className ="w-12 h-12 expand-on-hover" src={twitter} alt="Twitter"></img>
                </a><div className='bubble'><img src={head} alt="Head"></img></div>
                    <a href="">
                        <img className ="w-12 h-12 expand-on-hover" src={uniswap} alt="Uniswap"></img>
                    </a>
                    <a href="">
                    <img className ="w-12 h-12 expand-on-hover" src={etherscan} alt="Etherscan"></img> 
                </a>
                
            </div>
            <div className="end text-[12px]">This cryptocurrency is not related to The South Park, all matches are fictitious</div>
        </div>
        
    )
}

export default Links;