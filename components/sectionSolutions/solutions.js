import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const solutionTitles = [
  'Build',
  'Deploy',
  'Marketing',
  'Communication'
];

const solutionDescriptions = [
  'Suggest appropriate licenses, deployment method according to IP types and present community and brand concepts.',
  'Create and deploy smart contracts with the customer-centric approach, managing all the risks that may arise in the untrusted environment.',
  'Promote to communities familiar with open IPs to create an environment where value can be created continuously even after launch.',
  'Provide smooth communication for community participants and IP to grow together.'
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
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-BrothersBold text-2xl text-gray-200 mb-4">Solutions</h1>
            <p className="font-NotoSans text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">Specialized for Open IPs.</p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 lg:space-y-0 space-y-6">
            <div className="p-4 lg:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                              alt="team"
                              className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                              src="/solutionImgs/setting.png"
                              width={64}
                              height={64}
                              />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-200 text-lg  mb-3">{solutionTitles[0]}</h2>
                <p className="leading-relaxed text-base">{solutionDescriptions[0]}</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="team"
                  className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/solutionImgs/deploy.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-200 text-lg  mb-3">{solutionTitles[1]}</h2>
                <p className="leading-relaxed text-base">{solutionDescriptions[1]}</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="team"
                  className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/solutionImgs/promote.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-200 text-lg  mb-3">{solutionTitles[2]}</h2>
                <p className="leading-relaxed text-base">{solutionDescriptions[2]}</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/4 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <Image
                  alt="team"
                  className="bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="/solutionImgs/community.png"
                  width={64}
                  height={64}
                />
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-200 text-lg  mb-3">{solutionTitles[3]}</h2>
                <p className="leading-relaxed text-base">{solutionDescriptions[3]}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}