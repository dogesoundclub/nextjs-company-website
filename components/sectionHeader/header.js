import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import DarkModeToggleButton from '../scripts/dark-mode-toggle-button';

export default function Header(){
    const { theme } = useTheme();
    // const [headerOpacity, setHeaderOpacity] = useState(0);

    const handleHomeButtonClick = () => {
        const teamSection = document.getElementById('home');
        if (teamSection) {
        window.scrollTo({ top: teamSection.offsetTop, behavior: 'smooth' });
        }
    };

    const handleSolutionsButtonClick = () => {
        const teamSection = document.getElementById('solution');
        if (teamSection) {
        window.scrollTo({ top: teamSection.offsetTop, behavior: 'smooth' });
        }
    };

    const handleTeamButtonClick = () => {
        const teamSection = document.getElementById('team');
        if (teamSection) {
        window.scrollTo({ top: teamSection.offsetTop, behavior: 'smooth' });
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
            <header className="fixed top-0 left-0 right-0 z-50 text-gray-600 body-font transition-colors duration-1000 ease-in-out">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <Link href="/">
                    <a className="flex titlefont font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src={`/logo/${theme === 'light' ? 'logoForLight.png' : 'logoForNight.png'}`}
                               alt="로고 이미지"
                               className="w-18 h-12"/>
                    </a>
                    </Link>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleHomeButtonClick}
                        >
                        HOME
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleTeamButtonClick}
                        >
                        SOLUTION
                        </button>

                        <button
                        className="font-NotoSansBold mr-5 hover:text-gray-200"
                        onClick={handleTeamButtonClick}
                        >
                        TEAM
                        </button>


                    </nav>
                    {/* 다크모드 토글 버튼 작업해야함 */}
                    <DarkModeToggleButton/>
                </div>
            </header>
        </>
    );
}
