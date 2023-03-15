import { useState, useEffect } from 'react';
import Image from 'next/image'
import Lottie from 'react-lottie-player'

import DeployAnimation from "./deployAnimation";
import PromoteAnimation from "./promoteAnimation";
import BuildAnimation from "./buildAnimation";
import PlayAnimation from "./playAnimation";

export default function Solutions() {
    const [solution, setSolution] = useState('deploy');
    const [title, setTitle] = useState('Secure Deployment');
    const [description, setDescription] = useState('Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven\'t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.');
    const [isDiv3Active, setIsDiv3Active] = useState(true);

    useEffect(() => {
      switch (solution) {
        case 'deploy': {
          setTitle('Secure Deployment');
          setDescription('We write and deploy smart contracts with a customer-centric approach, managing all the risks that may arise in the untrusted environment.');
          console.log('deploy');
          return;
        }

        case 'promote': {
          setTitle('Crypto Marketing');
          setDescription('Our solutions help you to promote your products and brand to reach a wider audience.');
          console.log('promote');
          return;
        }

        case 'build': {
          setTitle('Build Your Apps Faster and Easier');
          setDescription('Create your app with our solutions and enjoy the flexibility and power of the latest web technologies.');
          console.log('build');
          return;
        }

        case 'play': {
          setTitle('Play and Win with Your Apps');
          setDescription('Our solutions help you to monetize your apps and games, reaching a large user base worldwide.');
          console.log('play');
          return;
        }

        default: {
          setTitle('Err : Unexpected Case?');
          setDescription('Err : Unexpected Case?');
          console.log('default');
          return;
        }

      }
    }, [solution]);
    
    return (
        <>
            <section id="solutions" className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-BrothersBold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Solution</h1>
                    {/* <p className="font-NotoSansBold lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>
                <div className="flex mx-auto flex-wrap mb-20">
                <a className="font-NotoSans sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium bg-gray-100 inline-flex items-center leading-none border-indigo-500 text-indigo-500 tracking-wider rounded-t"
                    onClick={() => 
                      {
                        setSolution("deploy");
                      }
                    }>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>DEPLOY
                </a>
                <a className="font-NotoSans sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                    onClick={() => 
                      {
                        setSolution("promote");
                      }
                    }>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>PROMOTE
                </a>
                <a className="font-NotoSans sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                    onClick={() => 
                      {
                        setSolution("build");
                      }
                    }>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                        <circle cx="12" cy="5" r="3"></circle>
                        <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                    </svg>BUILD
                </a>
                <a className="font-NotoSans sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider"
                    onClick={() => 
                      {
                        setSolution("play");
                      }
                    }>
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                    </svg>PLAY
                </a>
                </div>
                <div className="flex item-center mx-auto justify-center">
                  {solution === 'deploy' && <DeployAnimation/>}
                  {solution === 'promote' && <PromoteAnimation/>}
                  {solution === 'build' && <BuildAnimation/>}
                  {solution === 'play' && <PlayAnimation/>}
                </div>
                {/* <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img> */}
                <div className="flex flex-col text-center w-full">
                <h1 className="font-NotoSansBold  text-xl font-medium title-font mb-4 text-gray-900">{title}</h1>
                <p className="font-NotoSans text-center lg:w-1/4  mx-auto leading-relaxed">{description}</p>
                </div>
            </div>
            </section>
        </>
    );
}