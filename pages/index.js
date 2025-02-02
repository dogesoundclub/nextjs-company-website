import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/layout';
import Hero from '../components/sectionHero/hero';

export default function Home() {
  return (
    <Layout>
        <Head>
            <title>DSC LABEL</title>
            <meta name="description" content="" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="flex min-h-screen flex-col items-center justify-center text-gray-600">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <Hero style={{ position: "relative", zIndex: 1 }}/>
            </div>
        </section>
    </Layout>
  );
}
