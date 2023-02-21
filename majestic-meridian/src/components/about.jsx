import React from 'react';
import sandraDiploma from '../img/diploma-san.jpg';
import sandraKart from '../img/kart-san.jpg';
import sandraPicture from "../img/Sannievdbuurt.jpeg";


const About = ({  }) => {

    return (
        <div className="bg-black flex flex-col items-center">
            <div className="flex">
                <h1 className="text-orange text-6xl my-20 mr-1.5">01. </h1>
                <h1 className="text-white text-6xl my-20">More about me</h1>
            </div>

            <div className="flex">
                <div className="w-96">
                    <p className="text-white text-lg">
                        My name is Sandra, and I am a front-end developer based in the Netherlands. Besides developing I also have a
                        keen eye for creating engaging UI, bringing websites to life!
                    </p>
                    <br/>
                    <p className="text-white text-lg">My interest for web development started in 2019, when I had no idea what I wanted with my future.
                        One day my friend showed me his HTML portfolio website assignment for school, which inspired me to do some research on web development.
                        Fast forward to september 2020, I started studying Computer Science at the Utrecht University of Applied Sciences. I successfully completed my freshman year in 2021, in which I have been introduced
                        to different fields of the IT world: networks and cybersecurity, software development, artificial intelligence and embedded programming.
                        I am now focussing on enhancing my front-end programming- and UI/UX design skills.</p>
                    <br/>
                    <p className="text-white text-lg">
                        In addition to my love for web development, I am also interested in Formula 1 (any fast vehicle, really), fitness and videogames.
                    </p>
                </div>

                <div className="-translate-y-24 flex flex-col mx-10 my-10">
                    <div className="translate-y-14 rounded flex justify-center text-center items-center w-56 h-16 bg-orange">
                        <p className="text-white p-4">Freshman year graduation 2021 </p>
                    </div>
                    <img className="rounded-md h-64 w-85 m-5" src={sandraDiploma} alt={"Sandra with her propedeutic diploma"}/>
                    <div className="translate-y-12 translate-x-56 rounded flex justify-center text-center items-center w-56 h-16 bg-orange">
                        <p className="text-white p-4">Little me in my go-karting era </p>
                    </div>
                    <img className="rounded-md h-64 w-85 m-5" src={sandraKart} alt={"Little Sandra in her go-kart"}/>
                </div>
            </div>
        </div>
    )
}

export default About;
