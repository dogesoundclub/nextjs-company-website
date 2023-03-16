import Image from 'next/image'

export default function Press() {
    return (
        <>
            <section id="press" className="text-gray-600 overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-BrothersBold sm:text-3xl text-2xl  mb-4 text-gray-200">Press</h1>
                </div>
                    <div className="-my-8 divide-y-2 divide-gray-100">
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold text-gray-700">CNBNEWS</span>
                        <span className="mt-1 text-gray-500 text-sm">3 AUG 2022</span>
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-xl font-semibold text-gray-200 mb-2">LG Household &amp; Health Care Sells Out 'Dr. Groot' NFTs in One Day.</h2>
                        <p className="text-sm leading-relaxed">LG Household &amp; Health Care announced on August 3 that all 2,000 units of its "Dr. Groot Universe NFT," which it released in collaboration with DSC Label, were sold out in just one day. (...)</p>
                        <a className="text-indigo-500 inline-flex items-center mt-4" href="https://www.cnbnews.com/news/article.html?no=558456" target="_blank" rel="noopener noreferrer">Go to article
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold text-gray-700">ETNEWS</span>
                        <span className="mt-1 text-gray-500 text-sm">31 AUG 2022</span>
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-xl font-semibold text-gray-200 mb-2">EDM·NFT Festival 'Micro Seoul 2022' Comes to an End.</h2>
                        <p className="text-sm leading-relaxed">The two-day 'Micro Seoul 2022:NFT Sound &amp; Beer Fiesta', an EDM festival, was successfully held at Seoul Land with more than 20 NFT and blockchain companies. (...)</p>
                        <a className="text-indigo-500 inline-flex items-center mt-4" href="https://www.etnews.com/20220831000304" target="_blank" rel="noopener noreferrer">Go to article
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    <div className="py-8 flex flex-wrap md:flex-nowrap">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                        <span className="font-semibold text-gray-700">MBN</span>
                        <span className="text-sm text-gray-500">21 March 2022</span>
                        </div>
                        <div className="md:flex-grow">
                        <h2 className="text-xl font-semibold text-gray-200 mb-2">DSC donates 10 Ethereum to Ukraine.</h2>
                        <p className="text-sm leading-relaxed">Korean NFT project, Doge Sound Club (DSC), has donated 10 Ethereum to Ukraine. DSC raised funds from the sale of their 0th Mate and donated the Ethereum to Ukrainian government. (...)</p>
                        <a className="text-indigo-500 inline-flex items-center mt-4" href="https://www.mbn.co.kr/news/world/4722103" target="_blank" rel="noopener noreferrer">Go to article
                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}