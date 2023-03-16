import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import DarkModeToggleButton from '../scripts/dark-mode-toggle-button';
import Image from 'next/image'

export default function Header(){
    const { theme } = useTheme();

    const handleScrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            header.classList.toggle('bg-gray-900', window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="md:mb-4 fixed top-0 left-0 right-0 text-gray-600 transition-colors duration-1000 ease-in-out">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/">
                    <a className="flex  items-center text-gray-200 mb-4">
                        <Image src={`/logo/${theme === 'light' ? 'logoForLight.png' : 'logoForNight.png'}`}
                            alt="로고 이미지"
                            width="48"
                            height="36"
                        />
                    </a>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <button className="font-NotoSansBold mr-5 hover:text-gray-200" onClick={() => handleScrollToSection('solutions')}>SOLUTIONS</button>
                    <button className="font-NotoSansBold mr-5 hover:text-gray-200" onClick={() => handleScrollToSection('team')}>TEAM</button>
                    <button className="font-NotoSansBold mr-5 hover:text-gray-200" onClick={() => handleScrollToSection('contact')}>CONTACT</button>
                </nav>
            </div>
        </header>
    );
}