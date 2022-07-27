import React, { FC, useEffect, useState } from 'react';
import Button from '../../Button';
import { IoLogOut, IoWalletSharp } from 'react-icons/io5';
import Popover from '../../Popover';
import ReachConnectWalletContent from './ReachConnectWalletContent';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/types';
import { localSave, message } from '../../../common/common';
import { LOCAL_REACH_WALLET, NETWORK } from '../../../common/const';
import { ALGO_MyAlgoConnect as MyAlgoConnect, ALGO_WalletConnect as WalletConnect, loadStdlib } from '@reach-sh/stdlib';
import { updateReduxData } from '../../../redux/actions';
import { ALGO_INDEXER_API, ALGO_NODE_API } from '../../../common/routes';
import Copy from '../../Copy';

interface ReachConnectWalletProps {
    className?: string;
}

export const getConnectorByName = (name: string): unknown => {
    switch (name) {
        case 'MyAlgoConnect':
            return MyAlgoConnect;
        case 'WalletConnect':
            return WalletConnect;
        default:
            return;
    }
};

const ReachConnectWallet: FC<ReachConnectWalletProps> = ({ children, className }) => {
    const reach = loadStdlib('ALGO');
    const wallet = useSelector((state: RootState) => state.reach_wallet);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
        if (wallet) {
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
                    [wallet.connector]: getConnectorByName(wallet.connector),
                }),
            );
        }
    }, []);

    const disconnect = async () => {
        localSave('walletconnect');
        localSave(LOCAL_REACH_WALLET);
        window.location.reload();
    };

    const formatWallet = (address: string) => {
        if (address.length > 32) {
            return `${address.substring(0, 4)} ⋯ ${address.substring(address.length - 4, address.length)}`;
        }
        return address;
    };

    return (
        !loading &&
        (wallet ? (
            <div>
                <div className="flex space-x-2 items-center">
                    <Button
                        className="hidden md:block"
                        secondary
                        onClick={() => window.open('https://bank.testnet.algorand.network/', '_blank')}
                        onAuxClick={() => window.open('https://bank.testnet.algorand.network/', '_blank')}
                    >
                        Get more TestNet ALGO
                    </Button>
                    <div className="font-prompt-bold">
                        <Copy copyValue={wallet.address}>{formatWallet(wallet.address)}</Copy>
                    </div>
                    <Button secondary onClick={disconnect} icon={<IoLogOut />} />
                </div>
            </div>
        ) : (
            <Popover content={<ReachConnectWalletContent />} on="click" padding={8}>
                <Button icon={<IoWalletSharp />}>Connect wallet</Button>
            </Popover>
        ))
    );
};

export default ReachConnectWallet;
