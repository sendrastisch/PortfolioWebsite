import React from 'react';
import sandraPicture from '../img/Sannievdbuurt.jpeg';

const Hero = ({  }) => {

    return (
        <div className="bg-black flex flex-row justify-center">
            <div className="m-32 mr-0">
                <img className="h-80 w-64 rounded-md" src={sandraPicture} alt="Sandra Fernandes Portrait" />
            </div>

            <div className="items-center m-32 ml-5">
                <div>
                    <p className="text-white">It's me!</p>
                </div>
                <div className="flex flex-row space-x-1.5 text-4xl">
                    <p className="text-white">Hi! I'm</p>
                    <p className="text-orange">Sandra Fernandes</p>
                </div>
                <div>
                    <p className="text-white">
                        I’m a third year front-end development student at the Utrecht
                        University of Applied Sciences
                    </p>
                </div>
            </div>


        </div>
    )
}

export default Hero;
