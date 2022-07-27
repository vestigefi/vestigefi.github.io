import React, { ReactNode, ReactElement } from 'react';
import Head from 'next/head';
import { APP_DESCRIPTION_LONG, APP_NAME, GOOGLE_ANALYTICS_ID } from '../../common/const';
import Navbar from '../Navbar';
import Footer from './Footer';
import AlertBox from '../AlertBox';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';

type LayoutProps = {
    children?: ReactNode;
    title?: string;
};

const classes = {
    childrenRoot: 'flex-1 items-stretch relative overflow-x-hidden justify-center flex',
    children: 'w-full max-w-screen-2xl',
    footer: 'flex justify-center',
};

const Layout = ({ children, title }: LayoutProps): ReactElement => {
    const colors = useSelector((state: RootState) => state.colors);
    return (
        <div className="py-1 transition-all flex flex-1 flex-col" style={{ background: colors.background }}>
            <Head>
                <title key="app-title">{title ? `${title} – ${APP_NAME}` : `${APP_NAME}`}</title>
                <meta name="description" content={APP_DESCRIPTION_LONG} key="app-description" />
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="57x57" href="/favicons/apple-icon-57x57.png" />
                <link rel="apple-touch-icon" sizes="60x60" href="/favicons/apple-icon-60x60.png" />
                <link rel="apple-touch-icon" sizes="72x72" href="/favicons/apple-icon-72x72.png" />
                <link rel="apple-touch-icon" sizes="76x76" href="/favicons/apple-icon-76x76.png" />
                <link rel="apple-touch-icon" sizes="114x114" href="/favicons/apple-icon-114x114.png" />
                <link rel="apple-touch-icon" sizes="120x120" href="/favicons/apple-icon-120x120.png" />
                <link rel="apple-touch-icon" sizes="144x144" href="/favicons/apple-icon-144x144.png" />
                <link rel="apple-touch-icon" sizes="152x152" href="/favicons/apple-icon-152x152.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-icon-180x180.png" />
                <link rel="icon" type="image/png" sizes="192x192" href="/favicons/android-icon-192x192.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="96x96" href="/favicons/favicon-96x96.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
                <link rel="manifest" href="/manifest.json" />
                <meta name="msapplication-TileColor" content="#000000" />
                <meta name="msapplication-TileImage" content="/favicons/ms-icon-144x144.png" />
                <meta name="theme-color" content="#000000" />
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`} />
                <script src="/static/datafeeds/udf/dist/bundle.js" />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${GOOGLE_ANALYTICS_ID}', {
                          page_path: window.location.pathname,
                        });
                      `,
                    }}
                />
            </Head>
            <AlertBox />
            <Navbar />
            <div className={classes.childrenRoot}>
                <div className={classes.children} style={{ maxHeight: '100%', overflow: 'hidden' }}>
                    {children}
                </div>
            </div>
            <div className={classes.footer}>
                <Footer />
            </div>
        </div>
    );
};

export default Layout;
