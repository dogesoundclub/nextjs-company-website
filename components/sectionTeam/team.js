import Link from 'next/link';
import { useRef } from 'react';

export default function Team() {

    return (
        <>
            <section id="team" className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-BrothersBold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">People</h1>
                    {/* <p className="font-NotoSansBold lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>
                    <div className="flex flex-wrap items-center justify-center -m-1">
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://storage.googleapis.com/dsc-mate/336/dscMate-113.png"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Abito</h2>
                            <p className="text-gray-500">CEO</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Onceagain</h2>
                            <p className="text-gray-500">CBO</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://storage.googleapis.com/dsc-mate/336/dscMate-7376.png"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Tiger</h2>
                            <p className="text-gray-500">COO</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/90x90"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Rabbit</h2>
                            <p className="text-gray-500">Tech Lead</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://storage.googleapis.com/dsc-mate/336/dscMate-5982.png"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Smlee</h2>
                            <p className="text-gray-500">Developer</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://storage.googleapis.com/dsc-mate/336/dscMate-1735.png"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Yuyu</h2>
                            <p className="text-gray-500">Project Manager</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://storage.googleapis.com/dsc-mate/336/dscMate-4621.png"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">4rtsheep</h2>
                            <p className="text-gray-500">Community Manager</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">YJ</h2>
                            <p className="text-gray-500">Technical Advisor</p>
                        </div>
                        </div>
                    </div>
                    <div className="project-card p-2 lg:w-1/4 md:w-1/3 w-full">
                        <div className="h-full flex items-center">
                        <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/108x98"/>
                        <div className="flex-grow">
                            <h2 className="text-gray-900 title-font font-medium">Kingbit</h2>
                            <p className="text-gray-500">Community Advisor</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </>
    );
}
