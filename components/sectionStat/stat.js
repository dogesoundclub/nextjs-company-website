import StatAnimation from "./statAnimation";

export default function Statistic(){
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-wrap">
                    <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
                    <div className="w-full sm:p-4 px-4 mb-6">
                        <h1 className="font-BrothersBold sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">STAT</h1>
                        <div className="font-NotoSansBold lg:w-2/3 leading-relaxed text-base">Our blockchain assets and online followers stat.</div>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="titlefont font-medium text-3xl text-gray-900">$3M</h2>
                        <p className="leading-relaxed">Trading Volume</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="titlefont font-medium text-3xl text-gray-900">12K</h2>
                        <p className="leading-relaxed">Holder Wallets</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="titlefont font-medium text-3xl text-gray-900">21K</h2>
                        <p className="leading-relaxed">Followers</p>
                    </div>
                    <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                        <h2 className="titlefont font-medium text-3xl text-gray-900">5</h2>
                        <p className="leading-relaxed">NFT Collecions</p>
                    </div>
                    </div>
                    <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
                    <StatAnimation/>
                    </div>
                </div>
            </section>
        </>
    );
}
