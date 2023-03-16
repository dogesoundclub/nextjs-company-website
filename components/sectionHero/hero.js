import HeroAnimation from "./heroAnimation";

const Hero = () => {
  const heroTexts = [
    {
      id: "upText",
      animationClass: "slideRightAnimation",
      text: "Open licensing culture with NFT is changing our lives.",
      fontSize: "text-xs lg:text-lg",
      marginBottom: "mb-4",
      leading: "leading-relaxed",
      whiteSpace: "whitespace-normal",
    },

    {
      id: "downText",
      animationClass: "slideUpAnimation opacity-0",
      text: "OPEN YOUR UNIVERSE.\n\nWORLD WILL WELCOME YOU.",
      fontSize: "text-xl lg:text-4xl",
      lineHeight: "calc(var(--vh, 1vh) * 4",
    },
  ];

  return (
    <div className="relative top-[9rem] lg:top-[3rem] mx-4 lg:mx-0 relative flex flex-col lg:flex-row items-start lg:items-center h-screen">
      <div
        id="main-text"
        className="mx-auto lg:w-1/3 animationContainer flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0 lg:-mr-48"
      >
        {heroTexts.map(({ id, animationClass, text, ...rest }) => (
          <p
            key={id}
            id={id}
            className={`${animationClass} font-NotoSansBold ${rest.fontSize} ${rest.marginBottom} ${rest.leading} ${rest.whiteSpace}`}
          >
            {text}
          </p>
        ))}
      </div>

      <div id="heroAnimation" className="mx-auto w-5/6 lg:w-1/4">
        <HeroAnimation />
      </div>
    </div>
  );
};

export default Hero;