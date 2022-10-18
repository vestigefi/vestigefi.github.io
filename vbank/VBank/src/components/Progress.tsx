import Router from 'next/router';
import NProgress from 'nprogress';

let timer;
let state;
let activeRequests = 0;
const delay = 200;

function load() {
    if (state === 'loading') {
        return;
    }
    state = 'loading';
    timer = setTimeout(() => {
        NProgress.start();
    }, delay);
}

function stop() {
    if (activeRequests > 0) {
        return;
    }
    state = 'stop';
    clearTimeout(timer);
    NProgress.done();
}

Router.events.on('routeChangeStart', load);
Router.events.on('routeChangeComplete', stop);
Router.events.on('routeChangeError', stop);

const originalFetch = window.fetch;
window.fetch = async function (...args) {
    if (activeRequests === 0) {
        if (!((args[0] as string) || '').includes('tradingview')) load();
    }
    if (!((args[0] as string) || '').includes('tradingview')) activeRequests++;
    try {
        return await originalFetch(...args);
    } catch (error) {
        return Promise.reject(error);
    } finally {
        if (!((args[0] as string) || '').includes('tradingview')) activeRequests -= 1;
        if (activeRequests === 0) {
            if (!((args[0] as string) || '').includes('tradingview')) stop();
        }
    }
};

export default function _(): null {
    return null;
}
