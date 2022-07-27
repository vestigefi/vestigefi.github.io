import React, { FC, useEffect, useState } from 'react';
import Img from '../../components/Img';
import Card from '../../components/Card';
import Button from '../../components/Button';
import { formatPrice, message } from '../../common/common';
import AnimatedText from '../../components/AnimatedText';
import Modal from '../../components/Modal';
import SwapModal from './SwapModal';
import { FaCoins, FaFire } from 'react-icons/fa';
import Ticker from './Ticker';
import { APPLICATION_ID } from '../../common/const';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../contracts/index.main';
import { RootState } from '../../redux/types';
import { useSelector } from 'react-redux';
import { BigNumber } from 'ethers';

let updateInterval;

const HomeView: FC = () => {
    const wallet = useSelector((state: RootState) => state.reach_wallet);
    const reach = loadStdlib('ALGO');
    const [stablePrice, setStablePrice] = useState(0);
    const [stableCirculating, setStableCirculating] = useState(0);
    const [reservePrice, setReservePrice] = useState(0);
    const [reserveCirculating, setReserveCirculating] = useState(0);
    const [reservePercent, setReservePercent] = useState(0);
    const [reserveAmount, setReserveAmount] = useState(0);
    const [modalOpen, setModalOpen] = useState(false);
    const [action, setAction] = useState<'Mint' | 'Burn'>('Mint');
    const [coin, setCoin] = useState<'vUSD' | 'vRSV'>('vUSD');

    const openModal = (c, a) => () => {
        setCoin(c);
        setAction(a);
        setModalOpen(true);
    };

    const updateStates = async () => {
        if (wallet) {
            try {
                const account = await reach.getDefaultAccount();
                const viewCtc = await account.contract(backend, APPLICATION_ID);
                const view = viewCtc.v.Viewer;
                const ctcInfo = await view.read();
                const [
                    reserveCirculation,
                    stableCirculation,
                    reserves,
                    equity,
                    liabilities,
                    totFee,
                    adminFeeR,
                    protocolFeeR,
                    accruedAdminFees,
                    targetPriceSC,
                    thrshNumSC,
                    minPriceSC,
                    minPriceRC,
                    priceSC,
                    priceRC,
                    minRR,
                    maxRR,
                ] = ctcInfo[1].map((v) => BigNumber.from(v).toNumber());

                const reserveRatio = reserves / liabilities;

                setStablePrice(priceSC / Math.pow(10, 2));
                setStableCirculating(stableCirculation / Math.pow(10, 4));
                setReservePrice(priceRC / Math.pow(10, 2));
                setReserveCirculating(reserveCirculation / Math.pow(10, 4));
                setReservePercent(reserveRatio);
                setReserveAmount(reserves / Math.pow(10, 6));
            } catch (e) {
                message(e.toString());
            }
        }
    };

    useEffect(() => {
        if (wallet) updateStates();
        updateInterval = setInterval(updateStates, 30000);
        return () => {
            clearInterval(updateInterval);
        };
    }, [wallet]);

    return (
        <div>
            <div className="py-16 flex flex-col items-center space-y-2 justify-center">
                <h1 className="text-7xl items-top font-josefin-bold flex">
                    <div style={{ width: '3.325rem', height: '3.325rem' }}>
                        <Img className="w-full h-full h-12" src="/assets/Vestige-0.svg" />
                    </div>
                    <span>Bank</span>
                </h1>
                <span className="text-2xl font-josefin text-center px-2">
                    The algorithmic stablecoin smart contract regulated by user-incentivized crypto reserves
                </span>
            </div>
            <div className="flex flex-col xl:flex-row justify-center items-center lg:space-x-8 pb-4">
                <div className="flex justify-center items-center py-4 flex-col">
                    <div className="max-w-screen-md w-full space-y-8 lg:pt-16 xl:py-20">
                        <div className="flex flex-col lg:flex-row items-center justify-between w-full relative">
                            <div className="lg:absolute pb-4 z-20" style={{ top: '-5rem', right: '-5rem' }}>
                                <Img src="/assets/vusd.svg" className="w-36 h-36" />
                            </div>
                            <Card rootClassName="w-full">
                                <h3 className="px-4 flex flex-col md:flex-row space-x-3 lg:items-end text-center lg:text-left">
                                    <span className="font-josefin-bold text-4xl" style={{ color: '#FFD084' }}>
                                        vUSD
                                    </span>
                                    <span className="font-josefin text-2xl">Stablecoin pegged to 1 USD</span>
                                </h3>
                                <div className="opacity-80 py-2" style={{ maxWidth: '95%' }}>
                                    This asset tracks a price feed valued in <Ticker>ALGO</Ticker> (
                                    <Ticker>ALGO/USD</Ticker> in this case) and maintains a close peg. Users can
                                    exchange <Ticker>ALGO</Ticker> to mint <Ticker>vUSD</Ticker> at current market
                                    prices. <Ticker>vUSD</Ticker> can be burned at any time to return to{' '}
                                    <Ticker>ALGO</Ticker>. Minting and burning includes a fee. <br />
                                    This assets price <b>will not fluctuate</b> in terms of USD.
                                </div>
                                <div className="py-8 flex justify-around text-xl">
                                    <div className="items-center flex flex-col justify-center">
                                        <div className="opacity-60 text-sm">Price</div>
                                        <span className="font-mono">
                                            <AnimatedText text={formatPrice(stablePrice, 6)} />
                                            <b className="font-algo text-sm pl-1">A</b>
                                        </span>
                                    </div>
                                    <div className="items-center flex flex-col justify-center">
                                        <div className="opacity-60 text-sm">Circulating supply</div>
                                        <span className="font-mono">{formatPrice(stableCirculating, 6)}</span>
                                    </div>
                                </div>
                                {!wallet && (
                                    <div className="opacity-60 flex w-full justify-center text-center text-sm">
                                        Connect wallet to see protocol values
                                    </div>
                                )}
                                <div>
                                    <div className="w-full flex space-x-4 justify-center lg:justify-end p-4">
                                        <Button
                                            onClick={openModal('vUSD', 'Mint')}
                                            className="font-josefin-bold text-lg"
                                            icon={<FaCoins />}
                                            disabled={!wallet || modalOpen}
                                        >
                                            Mint
                                        </Button>
                                        <Button
                                            onClick={openModal('vUSD', 'Burn')}
                                            className="font-josefin-bold text-lg"
                                            icon={<FaFire />}
                                            disabled={!wallet || modalOpen}
                                        >
                                            Burn
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="flex flex-col lg:flex-row pb-4 items-center relative">
                            <div className="lg:absolute pb-4 z-20" style={{ bottom: '-5rem', left: '-5rem' }}>
                                <Img src="/assets/vrsv.svg" className="w-36 h-36" />
                            </div>
                            <Card rootClassName="w-full">
                                <h3 className="px-4 space-x-3 flex flex-col md:flex-row lg:items-end text-center lg:text-left">
                                    <span className="font-josefin-bold text-4xl" style={{ color: '#5B6A83' }}>
                                        vRSV
                                    </span>
                                    <span className="font-josefin text-2xl">
                                        Reserve coin used for price stabilization
                                    </span>
                                </h3>
                                <div className="opacity-80 py-2">
                                    This asset represents the equity held by the protocol inside the smart contract. By
                                    minting <Ticker>vRSV</Ticker> users ensure stability of <Ticker>vUSD</Ticker>.{' '}
                                    <Ticker>vRSV</Ticker> burning will not be allowed if the collateralization rate
                                    falls too low, as well as it's minting will not be possible if the collateralization
                                    rate is above the limit. Minting and burning includes a fee. <br />
                                    This assets price <b>will fluctuate</b> in terms of USD.
                                </div>
                                <div className="py-8 flex justify-around text-xl">
                                    <div className="items-center flex flex-col justify-center">
                                        <div className="opacity-60 text-sm">Price</div>
                                        <span className="font-mono">
                                            <AnimatedText text={formatPrice(reservePrice, 6)} />
                                            <b className="font-algo text-sm pl-1">A</b>
                                        </span>
                                    </div>
                                    <div className="items-center flex flex-col justify-center">
                                        <div className="opacity-60 text-sm">Circulating supply</div>
                                        <span className="font-mono">{formatPrice(reserveCirculating, 6)}</span>
                                    </div>
                                </div>
                                {!wallet && (
                                    <div className="opacity-60 flex w-full justify-center text-center text-sm">
                                        Connect wallet to see protocol values
                                    </div>
                                )}
                                <div>
                                    <div className="w-full flex space-x-4 justify-center lg:justify-end p-4">
                                        <Button
                                            onClick={openModal('vRSV', 'Mint')}
                                            disabled={!wallet || modalOpen}
                                            className="font-josefin-bold text-lg"
                                            icon={<FaCoins />}
                                        >
                                            Mint
                                        </Button>
                                        <Button
                                            onClick={openModal('vRSV', 'Burn')}
                                            disabled={!wallet || modalOpen}
                                            className="font-josefin-bold text-lg"
                                            icon={<FaFire />}
                                        >
                                            Burn
                                        </Button>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                </div>
                <div>
                    <Card rootClassName="w-64">
                        <div className="py-8 flex flex-col items-center space-y-8 justify-around text-xl">
                            <div className="items-center flex flex-col justify-center">
                                <div className="opacity-60 text-sm">Reserve ratio</div>
                                <span className="font-mono text-green-400">
                                    <AnimatedText text={formatPrice(100 * reservePercent, 2)} />%
                                </span>
                            </div>
                            <div className="items-center flex flex-col justify-center">
                                <div className="opacity-60 text-sm">Reserve amount</div>
                                <span className="font-mono">
                                    <AnimatedText text={formatPrice(reserveAmount, 0)} />
                                    <b className="font-algo text-sm pl-1">A</b>
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
                <SwapModal
                    modalOpen={modalOpen}
                    action={action}
                    coin={coin}
                    closeModal={() => setModalOpen(false)}
                    price={coin === 'vUSD' ? stablePrice : reservePrice}
                />
            </Modal>
        </div>
    );
};

export default HomeView;
