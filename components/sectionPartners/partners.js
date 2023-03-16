import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image'

export default function Partners() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
          <section id="partners" className="text-gray-600 body-font">

            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="font-BrothersBold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Partners</h1>

              </div>
              <div id="wow" className="flex flex-wrap justify-center">
                <div className="w-1/2 lg:1/6 p-4 w-full h-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      className="" 
                      src={isHovered ? "/partnersLogo/lg.png" : "/partnersLogo/lg-black.png"}
                      width="420"
                      height="420"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-1/2 lg:1/6 p-4 w-full h-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      className="" 
                      src={isHovered ? "/partnersLogo/sk.png" : "/partnersLogo/sk-black.png"}
                      width="420"
                      height="420"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-1/2 lg:1/6 p-4 w-full h-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      className="" 
                      src={isHovered ? "/partnersLogo/uppsala.png" : "/partnersLogo/uppsala-black.png"}
                      width="420"
                      height="420"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-1/2 lg:1/6 p-4 w-full h-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      src={isHovered ? "/partnersLogo/ozys.png" : "/partnersLogo/ozys-black.png"}
                      width="420"
                      height="420"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-1/2 lg:1/6 p-4 w-full h-full">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      src={isHovered ? "/partnersLogo/apmss.png" : "/partnersLogo/apmss-black.png"}
                      width="420"
                      height="420"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                
                </div>
              </div>
          </section>
        </>
    );
}
