import Link from 'next/link';
import React from 'react';
import logo from "@/public/logo.svg"
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav>

            <div className="container flex  justify-between items-center py-4">
                <div className="nav-brand">
                    <Link href="/">
                        <Image src={logo} alt="Eventry" className="h-[45px]" />
                    </Link>
                </div>
                <ul className="flex gap-4 text-[#9C9C9C]">
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>

    );
};

export default NavBar;