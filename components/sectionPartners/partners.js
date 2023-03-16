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
                      <h1 className="font-BrothersBold sm:text-3xl text-2xl mb-4 text-gray-200">Partners</h1>
              </div>
              <div id="wow" className="w-full flex flex-wrap lg:flex-nowrap justify-center">
                <div className="w-3/5 lg:w-full p-4 h-full flex justify-center">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      className="" 
                      src={isHovered ? "/partnersLogo/lg.png" : "/partnersLogo/lg-black.png"}
                      width="240"
                      height="240"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-3/5 lg:w-full p-4 h-full flex justify-center">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      className="" 
                      src={isHovered ? "/partnersLogo/sk.png" : "/partnersLogo/sk-black.png"}
                      width="240"
                      height="240"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-3/5 lg:w-full p-4 h-full flex justify-center">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      className="" 
                      src={isHovered ? "/partnersLogo/uppsala.png" : "/partnersLogo/uppsala-black.png"}
                      width="240"
                      height="240"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-3/5 lg:w-full p-4 h-full flex justify-center">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      src={isHovered ? "/partnersLogo/ozys.png" : "/partnersLogo/ozys-black.png"}
                      width="240"
                      height="240"
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      >
                    </Image>
                  </a>
                </div>
                <div className="w-3/5 lg:w-full p-4 h-full flex justify-center">
                  <a className="block relative rounded overflow-hidden">
                    <Image 
                      alt="ecommerce" 
                      src={isHovered ? "/partnersLogo/apmss.png" : "/partnersLogo/apmss-black.png"}
                      width="240"
                      height="240"
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
