import { useState } from 'react';
import Image from 'next/image';

const partners = [
  { image: '/partnersLogo/lg.png', imageHovered: '/partnersLogo/lg-black.png' },
  { image: '/partnersLogo/sk.png', imageHovered: '/partnersLogo/sk-black.png' },
  { image: '/partnersLogo/uppsala.png', imageHovered: '/partnersLogo/uppsala-black.png' },
  { image: '/partnersLogo/ozys.png', imageHovered: '/partnersLogo/ozys-black.png' },
  { image: '/partnersLogo/apmss.png', imageHovered: '/partnersLogo/apmss-black.png' },
];

export default function Partners() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = index => {
    setHoveredIndex(index);
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  }

  return (
    <section id="partners" className="text-gray-600">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="font-BrothersBold sm:text-3xl text-2xl mb-4 text-gray-200">Partners</h1>
        </div>
        <div id className="w-full flex flex-wrap lg:flex-nowrap justify-center">
          {partners.map((partner, index) => (
            <div key={index} className="w-3/5 lg:w-full p-4 h-full flex justify-center">
              <a className="block relative rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  className=""
                  src={hoveredIndex === index ? partner.imageHovered : partner.image}
                  width="240"
                  height="240"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave()}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}