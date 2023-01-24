import {Provider} from "react-redux";
import {AppProps} from 'next/app'
import {wrapper} from "../store";
import '../styles/globals.css'

const App = ({Component, ...rest}: AppProps) => {
    const {store, props} = wrapper.useWrappedStore(rest)
    return (
        <Provider store={store}>
            <Component {...props.pageProps} />
        </Provider>
    )
}
export default App

