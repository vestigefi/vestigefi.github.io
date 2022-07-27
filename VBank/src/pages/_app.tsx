import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { AppProps } from 'next/app';
import createStore from '../redux/store';
import { Provider } from 'react-redux';
import Router from 'next/router';
import 'tailwindcss/tailwind.css';
import 'nprogress/nprogress.css';
import './index.css';
import * as ga from '../common/ga';
import { initialState } from '../redux/reducer';
import Layout from '../components/Layout';
import { localLoad } from '../common/common';
import { LOCAL_REACH_WALLET } from '../common/const';
import Curtain from '../components/Curtain';

const Progress = dynamic(() => import('../components/Progress'), { ssr: false });

function MyApp({ Component }: AppProps): React.ReactNode {
    const store = createStore({
        ...initialState,
        reach_wallet: localLoad(LOCAL_REACH_WALLET),
    });

    useEffect(() => {
        const handleRouteChange = (url) => {
            ga.pageview(url);
        };
        Router.events.on('routeChangeComplete', handleRouteChange);
        return () => {
            Router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [Router.events]);

    return (
        <Provider store={store}>
            <Progress />
            <Curtain />
            <Layout>
                <Component />
            </Layout>
        </Provider>
    );
}

export default MyApp;
