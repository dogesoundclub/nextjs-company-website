import '../styles/globals.css'
import '../public/fonts/style.css'
import '/components/home/hero.css'

import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
    return(
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp
