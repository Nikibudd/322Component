import Header from "../components/Header";
import '../styles/globals.css'

export default function App({Component, pageProps}) {
    return (
        <div>
            <Header></Header>
            <h1>App</h1>
            <Component {...pageProps}/>
        </div>
    )
}