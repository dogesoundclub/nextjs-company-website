import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image'

export default function Partners() {

    return (
        <>
          <section id="partners" class="text-gray-600 body-font">

            <div class="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="font-BrothersBold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Partners</h1>
                      {/* <p className="font-NotoSansBold lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
              </div>
              <div class="flex flex-wrap -m-4">
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x420"></img>
                  </a>
                  {/* <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                    <p class="mt-1">$16.00</p>
                  </div> */}
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x420"></img>
                  </a>
                  {/* <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                    <p class="mt-1">$21.15</p>
                  </div> */}
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x420"></img>
                  </a>
                  {/* <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                    <p class="mt-1">$12.00</p>
                  </div> */}
                </div>
                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                  <a class="block relative h-48 rounded overflow-hidden">
                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x420"></img>
                  </a>
                  {/* <div class="mt-4">
                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                    <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                    <p class="mt-1">$18.40</p>
                  </div> */}
                </div>
                </div>
              </div>
          </section>
        </>
    );
}
