import React from "react";
import gif from '../assets/gif14.gif';
import head from '../assets/kennyshead.png';
import gif1 from '../assets/gif5.gif';
function Coin () {
    return (
        <div className="coinbody">
            <div className="flex justify-center items-center">
            <div className="w-1/3 sm:w-1/3"><img src={gif} alt="gif" className="w-[350px] ml-4 sm:ml-24" /></div>
            <div className="w-1/3 sm:w-1/3">
                <div className="aboutcomponent">
                    <div className="aboutcontainer relative px-4 sm:px-0">
                        <div className="flex justify-center items-center flex-col gap-14">
                            <span style={{ fontFamily: 'My Custom Font1' }} className="text-white text-sm sm:text-3xl flicker-text w-auto">
                                $ Keeny strategy $
                            </span>
                            <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-base text:sm-3xl flicker-text text-white font-bold w-auto'>
                        1. REFUSE TO PAY WORKERS FAIRLY
                    </h1>
                    <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-base text:sm-3xl flicker-text text-white font-bold w-auto'>
                        2. AVOID PAYING WHAT WE OWE THROUGH TAXES
                    </h1>
                    <h1 style={{ fontFamily: 'My Custom Font1' }} className='text-base text:sm-3xl flicker-text text-white font-bold w-auto'>
                        3. SHAME AND BLAME PEOPLE WHO USE SOCIAL SERVICES
                    </h1>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="w-1/3 sm:w-1/3"><img src={gif1} alt="gif" className="w-[350px] mr-24 sm:mr-24" /></div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Coin;