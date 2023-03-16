import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie-player';

import DeployAnimation from './deployAnimation';
import PromoteAnimation from './promoteAnimation';
import BuildAnimation from './buildAnimation';
import PlayAnimation from './playAnimation';

const titles = [
  'Secure Deployment',
  'Crypto Marketing',
  'Build Your Apps Faster and Easier',
  'Play and Win with Your Apps'
];

const descriptions = [
  'We write and deploy smart contracts with a customer-centric approach, managing all the risks that may arise in the untrusted environment.',
  'To increase the value of your digital assets, they must be marketed to cryptocurrency holders. Our network is built around cryptocurrency holders.',
  'Create your app with our solutions and enjoy the flexibility and power of the latest web technologies.',
  'Our solutions help you to monetize your apps and games, reaching a large user base worldwide.'
];

export default function Solutions() {
  const [solution, setSolution] = useState(0);
  const [isDiv3Active, setIsDiv3Active] = useState(true);

  useEffect(() => {
    console.log(solution);
  }, [solution]);

  const handleSolutionChange = (solutionIndex) => {
    setSolution(solutionIndex);
  };

  return (
    <>
      <section id="solutions" className="text-gray-600">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="font-BrothersBold sm:text-3xl text-2xl  mb-4 text-gray-200">Solution</h1>
            {/* <p className="font-NotoSansBold lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
          </div>
          <div className="flex mx-auto flex-wrap mb-20">
            {[0, 1, 2, 3].map((i) => (
              <a
                key={i}
                className={`font-NotoSans sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2  ${
                  solution === i ? 'bg-gray-100 border-indigo-500 text-indigo-500' : 'border-gray-200 hover:text-gray-200'
                } inline-flex items-center leading-none tracking-wider rounded-t${i === 3 ? ' rounded-b' : ''}`}
                onClick={() => {
                  handleSolutionChange(i);
                }}
              >
                {(() => {
                  switch (i) {
                    case 0:
                      return (
                        <>
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                          </svg>
                          DEPLOY
                        </>
                      );
                    case 1:
                      return (
                        <>
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                          </svg>
                          PROMOTE
                        </>
                      );
                    case 2:
                      return (
                        <>
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <circle cx="12" cy="5" r="3" />
                            <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
                          </svg>
                          BUILD
                        </>
                      );
                    case 3:
                      return (
                        <>
                          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          PLAY
                        </>
                      );
                  }
                })()}
              </a>
            ))}
          </div>
          <div className="flex item-center mx-auto justify-center">
            {solution === 0 && <DeployAnimation />}
            {solution === 1 && <PromoteAnimation />}
            {solution === 2 && <BuildAnimation />}
            {solution === 3 && <PlayAnimation />}
          </div>
          {/* <img className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"></img> */}
          <div className="flex flex-col text-center w-full">
            <h1 className="font-NotoSansBold  text-xl  mb-4 text-gray-200">{titles[solution]}</h1>
            <p className="font-NotoSans text-center w-full lg:w-1/4  mx-auto leading-relaxed">{descriptions[solution]}</p>
          </div>
        </div>
      </section>
    </>
  );
}