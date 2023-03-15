import FeatureAnimation from "./solutionsAnimation";
import Link from 'next/link';

export default function Feature() {
    return (
        <>
            <section id="solutions" className="text-gray-600 body-font">
            <div className="flex flex-col text-center w-full mb-20">
                    <h1 className="font-BrothersBold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Solutions</h1>
                    {/* <p className="font-NotoSansBold lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p> */}
                    </div>
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                    <FeatureAnimation/>
                    </div>
                    <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                        </div>
                        <div className="flex-grow">
                        <h2 className="font-BrothersBold text-gray-900 text-lg mb-3">Deployments</h2>
                        <p className="font-NotoSans leading-relaxed text-base">Utilizing smart contracts, our solution registers your company's products on the blockchain, enabling global and timeless access, thereby enhancing the value of your products. and effectively hedge against potential issues arising in non-trustworthy environments.</p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <circle cx="6" cy="6" r="3"></circle>
                            <circle cx="6" cy="18" r="3"></circle>
                            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                        </div>
                        <div className="flex-grow">
                        <h2 className="font-BrothersBold text-gray-900 text-lg mb-3">Market</h2>
                        <p className="leading-relaxed text-base"></p>
                        </div>
                    </div>
                    <div className="flex flex-col mb-10 lg:items-start items-center">
                        <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        </div>
                        <div className="flex-grow">
                        <h2 className="font-BrothersBold text-gray-900 text-lg mb-3">Neptune</h2>
                        <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    );
}
