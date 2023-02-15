import React from 'react';

const Navbar = ({  }) => {

    return (
        <div className="shadow-2xl bg-black flex justify-between border-b-2 ">
            <p className="text-orange m-7">Sandra Fernandes</p>
            <ul className="flex flex-row space-x-9 m-7">
                <li className="cursor-pointer">
                    <a className="flex text-white transition ease-in-out delay-40 hover:text-orange"><p className="mr-1.5 text-orange">01.</p>About</a>
                </li>
                <li className="cursor-pointer">
                    <a className="flex text-white transition ease-in-out delay-40 hover:text-orange"><p className="mr-1.5 text-orange">02. </p>Skills</a>
                </li>
                <li className="cursor-pointer">
                    <a className="flex text-white transition ease-in-out delay-40 hover:text-orange"><p className="mr-1.5 text-orange">03. </p>Projects</a>
                </li>
                <li className="cursor-pointer">
                    <a className="flex text-white transition ease-in-out delay-40 hover:text-orange "><p className="mr-1.5 text-orange">04. </p>Contact</a>
                </li>
            </ul>
        </div>

    )
}

export default Navbar;
