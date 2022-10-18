import React, { FC, useState } from 'react';
import Button from '../../Button';
import Card from '../../Card';
import Img from '../../Img';
import { loadStdlib } from '@reach-sh/stdlib';
import { localSave } from '../../../common/common';
import { LOCAL_REACH_WALLET, NETWORK } from '../../../common/const';
import { updateReduxData } from '../../../redux/actions';
import { getConnectorByName } from './index';
import { ALGO_INDEXER_API, ALGO_NODE_API } from '../../../common/routes';

const ReachConnectWallet: FC = () => {
    const [started, setStarted] = useState(false);

    const updateWallet = (address: string, connector: string) => {
        const walletData = { address, connector };
        localSave(LOCAL_REACH_WALLET, walletData);
        updateReduxData('reach_wallet', walletData);
    };

    const connect = (name) => async () => {
        if (started) window.location.reload();
        setStarted(true);
        try {
            const reach = loadStdlib('ALGO');
            reach.setWalletFallback(
                reach.walletFallback({
                    providerEnv: {
                        REACH_CONNECTOR_MODE: NETWORK,
                        ALGO_SERVER: ALGO_NODE_API,
                        ALGO_PORT: 443,
                        ALGO_INDEXER_SERVER: ALGO_INDEXER_API,
                        ALGO_INDEXER_PORT: 443,
                        ALGO_NODE_WRITE_ONLY: false,
                    },
                    [name]: getConnectorByName(name),
                }),
            );
            const account = await reach.getDefaultAccount();
            if (account && account?.networkAccount?.addr) {
                updateWallet(account.networkAccount.addr, name);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Card rootClassName="w-64" className="flex flex-col space-y-2">
            <Button backgroundColor="#FFFFFF" onClick={connect('MyAlgoConnect')}>
                <Img src="/assets/myalgowallet.png" className="w-full flex justify-center h-full" />
            </Button>
            <Button backgroundColor="#FFEE55" onClick={connect('WalletConnect')}>
                <Img src="/assets/perawallet.png" className="w-full flex justify-center h-full" />
            </Button>
        </Card>
    );
};

export default ReachConnectWallet;
