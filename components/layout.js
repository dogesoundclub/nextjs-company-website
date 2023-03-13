import Header from './header';
import Footer from './footer';
import Statistic from './statistic';

export default function Layout({ children }) {
    return (
        <div className="bg-primary">
            <Header/>
            <div>{children}</div>
            <Statistic/>
            <Footer/>
        </div>
    );
}
