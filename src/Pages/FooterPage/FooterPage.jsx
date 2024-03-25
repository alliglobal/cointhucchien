
import React from 'react';
import { FaGithub } from 'react-icons/fa'; // Import the GitHub icon from react-icons
import { RiUser3Line } from 'react-icons/ri'; // Import the person's face icon from react-icons

function Footer() {
    return (
        <>
            <hr></hr>
            <footer className="bg-stale-200 py-2">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center lg:px-20">
                    <div className="mb-0 md:mb-0">
                        <a
                            href="https://www.binance.com/en/activity/referral-entry/CPA?ref=CPA_008YV3Z82D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-800"
                        >
                            {/* <FaGithub className="inline-block text-xl mr-2" />  */}
                            <RiUser3Line className="inline-block text-xl mr-2" /> Binance
                        </a>
                        <span className="text-gray-500 mx-2">|</span>
                        <a
                            href="https://www.mexc.com/register?inviteCode=1za2H"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-800"
                        >
                            <RiUser3Line className="inline-block text-xl mr-2" /> Mexc
                        </a>

                        <span className="text-gray-500 mx-2">|</span>

                        <a
                            href="https://www.bybitglobal.com/invite?ref=1RZ4YV"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-800"
                        >
                            <RiUser3Line className="inline-block text-xl mr-2" /> Bybit
                        </a>
                        <span className="text-gray-500 mx-2">|</span>

                    </div>

                    <div className="md:ml-auto flex items-center">
                        {/* <img
                            src="https://prazwal.vercel.app/profilePic.jpg"
                            alt="Profile Pic"
                            className="w-10 h-10 rounded-full mr-2"
                        /> */}
                        <div className="text-blue-500 hover:text-blue-800 text-md">
                            &copy; {new Date().getFullYear()} AllinOne. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
