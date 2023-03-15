import Header from './sectionHeader/header';
import Feature from './sectionSolutions/_solutions';
import Statistic from './sectionStat/stat';
import Team from './sectionTeam/team';
import Footer from './sectionFooter/footer';
import Partners from './sectionPartners/partners'

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <Header/>
            <div>{children}</div>
            <Feature/>
            <Statistic/>
            <Team/>
            <Partners/>
            <Footer/>
        </div>
    );
}
