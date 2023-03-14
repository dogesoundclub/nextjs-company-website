import Header from './sectionHeader/header';
import Feature from './sectionSolutions/solutions';
import Statistic from './sectionStat/stat';
import Team from './sectionTeam/team';
import Footer from './sectionFooter/footer';

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <Header/>
            <div>{children}</div>
            <Feature/>
            <Statistic/>
            <Team/>
            <Footer/>
        </div>
    );
}
