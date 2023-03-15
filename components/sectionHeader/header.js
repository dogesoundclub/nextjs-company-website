import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import DarkModeToggleButton from '../scripts/dark-mode-toggle-button';
import Image from 'next/image'

export default function Header(){
    const { theme } = useTheme();

    const handleHomeButtonClick = () => {
        const homeSection = document.getElementById('home');
        if (homeSection) {
        window.scrollTo({ top: homeSection.offsetTop, behavior: 'smooth' });
        }
    };

    const handleSolutionsButtonClick = () => {
        const solutionsSection = document.getElementById('solutions');
        if (solutionsSection) {
        window.scrollTo({ top: solutionsSection.offsetTop, behavior: 'smooth' });
        }
    };

    const handleTeamButtonClick = () => {
        const teamSection = document.getElementById('team');
        if (teamSection) {
        window.scrollTo({ top: teamSection.offsetTop, behavior: 'smooth' });
        }
    };

    const handlePartnersButtonClick = () => {
        const partnersSection = document.getElementById('partners');
        if (partnersSection) {
        window.scrollTo({ top: partnersSection.offsetTop, behavior: 'smooth' });
        }
    };

    const handlePressButtonClick = () => {
        const pressSection = document.getElementById('press');
        if (pressSection) {
        window.scrollTo({ top: pressSection.offsetTop, behavior: 'smooth' });
        }
    };
    const handleContactButtonClick = () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
        window.scrollTo({ top: contactSection.offsetTop, behavior: 'smooth' });
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const header = document.querySelector('header');
            if (header && window.scrollY > 0) {
                header.classList.add('bg-gray-900');
                header.classList.remove('bg-transparent');
            } else {
                header.classList.add('bg-transparent');
                header.classList.remove('bg-gray-900');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <header className="md:mb-4 fixed top-0 left-0 right-0 z-50 text-gray-600 body-font transition-colors duration-1000 ease-in-out">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/">
                    <a className="flex titlefont font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <Image src={`/logo/${theme === 'light' ? 'logoForLight.png' : 'logoForNight.png'}`}
                               alt="로고 이미지"
                               width="48"
                               height="36"
                        />
                    </a>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleHomeButtonClick}>
                        HOME
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleSolutionsButtonClick}>
                        SOLUTIONS
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleTeamButtonClick}>
                        TEAM
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handlePartnersButtonClick}>
                        PARTNERS
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handlePressButtonClick}>
                        PRESS
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleContactButtonClick}>
                        CONTACT
                        </button>
                    </nav>
                    {/* <DarkModeToggleButton/> */}
                </div>
            </header>
        </>
    );
}
