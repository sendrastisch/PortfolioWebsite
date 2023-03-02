import React from 'react';
import sandraPicture from '../img/Sannievdbuurt.jpeg';

const Hero = ({}) => {



    return (
        <div className="bg-navy flex flex-row justify-center">
            <div className="overflow-hidden h-80 w-64 m-32 mr-0 rounded-md">
                <img className={"h-full w-full saturate-50 hover:scale-110 hover:saturate-100 transition ease-in-out duration-200 rounded-md"}
                     src={sandraPicture}
                     alt="Sandra Fernandes Portrait"/>
            </div>


            <div className="items-center m-32 ml-5">

                <div className="rounded flex justify-center items-center w-24 h-12 bg-orange">
                       <p className="text-black">It's me!</p>
                </div>
                <div className="w-0 h-0
                                translate-x-2
                                border-l-[8px] border-l-navy
                                border-t-[13px] border-t-orange
                                border-r-[8px] border-r-navy">
                </div>
                <div className="flex flex-row space-x-3.5 text-6xl">
                    <p className="text-white">Hi! I'm Sandra Fernandes</p>
                </div>

                <div>
                    <p className="text-white text-lg opacity-50">
                        Third year front-end development student at the Utrecht
                        University of Applied Sciences
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Hero;
