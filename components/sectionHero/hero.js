import HeroAnimation from "./heroAnimation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="lg:mx-auto relative top-[8rem] lg:top-[0rem] flex flex-col lg:flex-row items-center">
                <div className="animationContainer flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
                    <p id="upText" className="slideRightAnimation font-NotoSansBold mb-4 leading-relaxed">
                        Open licensing culture with NFT is changing our lives.
                    </p>
                    <h1 id="downText" className="slideUpAnimation opacity-0 font-BrothersBold lg:text-4xl text-3xl ">
                        OPEN YOUR UNIVERSE.<br/>
                        WORLD WILL WELCOME YOU.
                    </h1>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <HeroAnimation/>
                </div>
            </div>
        </>
    );
}
