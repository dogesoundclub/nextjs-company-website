import HeroAnimation from "./heroAnimation";

export default function Hero() {
    return (
        <>
            <div className="mx-auto relative lg:top-[8rem] lg:top-[0rem] flex flex-col lg:flex-row items-center">
                <div className="mx-auto lg:w-1/2 animationContainer flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0">
                    <p id="upText" className="slideRightAnimation font-NotoSansBold text-xs lg:text-xl mb-4 leading-relaxed whitespace-normal">
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
                <div className="lg:mx-auto w-5/6 lg:w-1/2">
                    <HeroAnimation/>
                </div>
            </div>
        </>
    );
}
