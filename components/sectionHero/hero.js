import HeroAnimation from "./heroAnimation";

export default function Hero() {
    return (
        <>
            <div className="relative top-[9rem] lg:top-[3rem] mx-4 lg:mx-0 relative flex flex-col lg:flex-row items-start lg:items-center h-screen">
                <div id="main-text" className="mx-auto lg:w-1/3 animationContainer flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0 lg:-mr-48">
                    <p id="upText" className="slideRightAnimation font-NotoSansBold text-xs lg:text-lg mb-4 leading-relaxed whitespace-normal">
                        Open licensing culture with NFT is changing our lives.
                    </p>
                    <h1 
                        id="downText" 
                        className="slideUpAnimation opacity-0 font-BrothersBold text-xl lg:text-4xl"
                        style={{ lineHeight: `calc(var(--vh, 1vh) * 4` }}
                    >
                        OPEN YOUR UNIVERSE.<br/>
                        WORLD WILL WELCOME YOU.
                    </h1>
                </div>
                <div id="heroAnimation" className="mx-auto w-5/6 lg:w-1/4">
                    <HeroAnimation/>
                </div>
            </div>
        </>
    );
}
