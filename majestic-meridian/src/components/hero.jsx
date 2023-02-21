import React, {useState} from 'react';
import sandraPicture from '../img/Sannievdbuurt.jpeg';

const Hero = ({}) => {

    const [hovered, setHovered] = useState(false);
    const toggleHover = () => setHovered(!hovered);

    return (
        <div className="bg-black flex flex-row justify-center">
            <div className="bg-orange m-32 mr-0 rounded-md">
                <img className={!hovered ? "h-80 w-64 rounded-md mix-blend-overlay backdrop-saturate-50" : "h-80 w-64 rounded-md"}
                     onMouseEnter={toggleHover}
                     onMouseLeave={toggleHover}
                     src={sandraPicture}
                     alt="Sandra Fernandes Portrait"/>
            </div>


            <div className="items-center m-32 ml-5">

                <div className="rounded flex justify-center items-center w-24 h-12 bg-orange">
                       <p className="text-black">It's me!</p>
                </div>
                <div className="w-0 h-0
                                translate-x-2
                                border-l-[8px] border-l-black
                                border-t-[13px] border-t-orange
                                border-r-[8px] border-r-black">
                </div>
                <div className="flex flex-row space-x-1.5 text-6xl">
                    <p className="text-white">Hi! I'm</p>
                    <p className="text-orange"> Sandra Fernandes</p>
                </div>

                <div>
                    <p className="text-white text-lg">
                        I’m a third year front-end development student at the Utrecht
                        University of Applied Sciences
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Hero;
