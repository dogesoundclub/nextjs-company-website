import HeroAnimation from "./heroAnimation";

const Hero = () => {
  const heroTexts = [
    {
      id: "upText",
      animationClass: "slideRightAnimation",
      font: "font-NotoSansBold",
      text1: "Open licensing culture with NFT is changing our lives.",
      fontSize: "text-xs lg:text-base",
      marginBottom: "mb-4",
      leading: "leading-relaxed",
      whiteSpace: "whitespace-normal",
    },

    {
      id: "downText",
      animationClass: "slideUpAnimation opacity-0",
      font: "font-BrothersBold",
      text1: "OPEN YOUR UNIVERSE.",
      text2: "WORLD WILL WELCOME YOU.",
      textColor : "text-gray-100",
      fontSize: "text-xl lg:text-2xl",
      lineHeight: "calc(var(--vh, 1vh) * 4",
    },
  ];

  return (
    <div className="relative top-[9rem] lg:top-[3rem] mx-4 lg:mx-0 relative flex flex-col lg:flex-row items-start lg:items-center h-screen">
      <div
        id="main-text"
        className="mx-auto lg:w-1/3 animationContainer flex flex-col items-center lg:items-start text-center lg:text-left mb-16 lg:mb-0 lg:-mr-48"
      >
        {heroTexts.map(({ id, animationClass, font, text1, text2, textColor, ...rest }) => (
          <p
            key={id}
            id={id}
            className={`${animationClass} ${font} ${textColor} ${rest.fontSize} ${rest.marginBottom} ${rest.leading} ${rest.whiteSpace}`}
          >
            {text1} <br/>
            {text2}
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