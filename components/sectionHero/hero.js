import HeroAnimation from "./heroAnimation";
import Link from 'next/link';

export default function Hero() {
    return (
        <>
            <div className="animation-container lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            {/* <h1 className="font-BrothersBold sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                WITH OPEN LICENSES
            </h1> */}
            <p className="animate-fade-in font-NotoSansBold mb-8 leading-relaxed">
            Open licensing culture with NFT will change our lives.
            </p>
            <h1 className="opacity-0 animation-text font-BrothersBold sm:text-4xl text-3xl mb-4 text-gray-900">
                OPEN YOUR UNIVERSE.<br/>
                WORLD WILL WELCOME YOU.
                {/* OPEN YOUR UNIVERSE <br/>
                CONNECT TO THE WORLD */}
            </h1>
            {/* <div className="flex justify-center">
                <Link href="/projects">
                    <a className="btn-project">
                        프로젝트 보러가기
                    </a>
                </Link>
            </div> */}
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <HeroAnimation/>
            </div>
        </>
    );
}
