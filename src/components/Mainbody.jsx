import React, { useState, useEffect } from 'react';
import logo from '../assets/crypto-keeny-high-resolution-logo-black-on-transparent-background.png'
import { Link, animateScroll as scroll } from "react-scroll";
import head from '../assets/kennyshead.png';
import gif from '../assets/git.gif';

function Mainbody () {

    return (
        <div className='mainbody'>
            <div className='flex justify-end items-center gap-10 py-10 mr-10 w-auto'>
            <a className='ml-10 mr-auto' href="#">
                    <img onClick={() => scroll.scrollToTop()} className ="w-auto sm:w-[350px] hidden sm:block" src={logo} alt="Logo"></img>
                </a>
                <div className='bubble hidden sm:block'><img src={head} alt="Head"></img></div>
                <Link to="about" smooth={true} duration={500} style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-4xl text-white button1 font-mono cursor-pointer w-auto sm:text-md'>About</Link>
                <Link to="info" smooth={true} duration={500} style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-4xl button1 font-mono cursor-pointer text-white w-auto sm:text-md'>Info</Link>
                <Link to="coin" smooth={true} duration={500} style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-4xl text-white button1 font-mono cursor-pointer w-auto sm:text-md'>Coin</Link>
                <Link to="links" smooth={true} duration={500} style={{ fontFamily: 'My Custom Font1' }} className='text-lg sm:text-4xl button1 font-mono cursor-pointer text-white w-auto sm:text-md'>Links</Link>
            </div>
            <div className='flex items-center justify-center min-h-screen'>
                <div className='flex flex-col gap-16 text-center'>
                    <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-4xl sm:text-6xl heading text-white font-bold expand w-auto sm:text-md'>
                        $KEENY$
                    </h1>
                    <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-4xl sm:text-6xl heading text-white font-bold expand w-auto sm:text-md'>
                    NEW era of tokens
                    </h1>
                    <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-4xl sm:text-6xl heading text-white font-bold expand w-auto sm:text-md'>
                        OMG! They killed Keeny!
                    </h1>
                    <div className='bubble hidden sm:block'><img src={head} alt="Head"></img></div>
                </div>
                <div className='bubble hidden sm:block'><img src={head} alt="Head"></img></div>
            </div>
        </div>
    )
}

export default Mainbody;