import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image'

export default function Partners() {

    return (
        <>
          <section >
              <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="font-BrothersBold sm:text-3xl text-2xl mb-4 text-gray-900">Partners</h1>
              </div>  
              <div className='flex justify-center'>       
              <div className="flex-1">
                <Image src="/sundance-logo.png" alt="" className="Image-fluid partner-logo" width={200} height={200} />
              </div>
              <div className="flex-1">
                <Image src="/sundance-logo.png" alt="" className="Image-fluid partner-logo" width={200} height={200} />
              </div>
              <div className="flex-1">
                <Image src="/sundance-logo.png" alt="" className="Image-fluid partner-logo" width={200} height={200} />
              </div>
              </div>
          </section>
        </>
    );
}
