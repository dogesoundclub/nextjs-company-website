import Header from './sectionHeader/header';
import Solutions from './sectionSolutions/solutions';
import Statistic from './sectionStat/stat';
import Team from './sectionTeam/team';
import Footer from './sectionFooter/footer';
import Partners from './sectionPartners/partners'
import Press from './sectionPress/press';

export default function Layout({ children }) {
    return (
        <div id="home" className="bg-primary">
            <Header style={{ position: "relative", zIndex: 2 }}/>
            <div>{children}</div>
            <Solutions/>
            <Statistic/>
            <Team/>
            <Partners/>
            <Press/>
            <Footer/>
        </div>
    );
}
