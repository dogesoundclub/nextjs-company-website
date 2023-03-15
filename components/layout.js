import Header from './sectionHeader/header';
import Solutions from './sectionSolutions/solutions';
import Statistic from './sectionStat/stat';
import Team from './sectionTeam/team';
import Footer from './sectionFooter/footer';
import Partners from './sectionPartners/partners'
import Press from './sectionPress/press';

export default function Layout({ children }) {
    return (
        <div id="home" className="bg-primary relative">
            <Header style={{ position: "relative", zIndex: 2 }}/>
            <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
            <Solutions style={{ position: "relative", zIndex: 1 }}/>
            <Statistic style={{ position: "relative", zIndex: 1 }}/>
            <Team style={{ position: "relative", zIndex: 1 }}/>
            <Partners style={{ position: "relative", zIndex: 1 }}/>
            <Press style={{ position: "relative", zIndex: 1 }}/>
            <Footer style={{ position: "relative", zIndex: 1 }}/>
        </div>
    );
}
