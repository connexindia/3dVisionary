import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { PiFacebookLogoDuotone } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const Mob = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    const navigate = useNavigate();

    return (
        <div className='bg-[#384241] text-white cursor-grab fixed w-full z-20 flex items-center justify-between h-16 sm:h-20 mb-200 '>
            <button className='z-[999] relative m-3 cursor-grab' onClick={toggleDrawer}>
                {isOpen ? <X /> : <Menu />}
            </button>

            {/* <div className="flex items-center">
                <img
                    src="/logo.png"
                    alt="Innoverse Logo"
                    className="h-16 sm:h-16 md:h-20 lg:h-24 mr-2"
                />
            </div> */}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '-100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '-100%' }}
                        transition={{ duration: 0.3 }}
                        className='fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] text-white p-6 cursor-grab'
                    >
                        <ul>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={toggleDrawer}><a href="/">Home</a></li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={toggleDrawer}><a href="/architects">Architects</a></li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={toggleDrawer}><a href="/real-estate">Real Estate</a></li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={toggleDrawer}><a href="/manufacturing">Manufacturing</a></li>
                            <li className='p-4 hover:bg-white/5 rounded-md cursor-pointer font-bold' onClick={toggleDrawer}><a href="/contact">Contact</a></li>
                        </ul>
                        <span className='block w-full h-[2px] bg-gray-600 mt-6'></span>

                        <div className='flex flex-row justify-between ml-5 mr-10 mt-5 cursor-grab'>
                            <a href="#" className='w-[4px] h-[4px] p-3 '><FaInstagram size={25} /></a>
                            <a href="#" className='w-[4px] h-[4px] p-3 '><CiLinkedin size={25} /></a>
                            <a href="#" className='w-[4px] h-[4px] p-3 '> <PiFacebookLogoDuotone size={25} /></a>
                            <a href="#" className='w-[4px] h-[4px] p-3 '><PiYoutubeLogo size={25} /></a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Mob;
