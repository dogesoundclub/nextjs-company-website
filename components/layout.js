import Header from './sectionHeader/header';
import Hero from './sectionHero/hero';
import Solutions from './sectionSolutions/solutions';
import Statistic from './sectionStat/stat';
import Team from './sectionTeam/team';
import Footer from './sectionFooter/footer';
import Partners from './sectionPartners/partners'
import Press from './sectionPress/press';

export default function Layout({ children }) {
    return (
        <div id="home" className="bg-primary">
            {/* <div style={{ position: "relative", zIndex: 1 }}>{children}</div> */}
            <Hero/>
            <Solutions/>
            <Statistic/>
            <Team/>
            <Partners/>
            <Press/>
            <Footer/>
            <Header/>
        </div>
    );
}
