import React, { FC, useEffect, useMemo, useState } from 'react';
import Card from '../../components/Card';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { FaArrowRight, FaCoins, FaFire } from 'react-icons/fa';
import Ticker from './Ticker';
import { GiPayMoney, GiReceiveMoney } from 'react-icons/gi';
import Img from '../../components/Img';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/types';
import api from '../../common/api';
import { ALGO_NODE_API } from '../../common/routes';
import Info from '../../components/Info';
import AnimatedText from '../../components/AnimatedText';
import { APPLICATION_ID, COIN_ID, RESERVE_ID } from '../../common/const';
import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from '../../contracts/index.main';
import { message } from '../../common/common';

interface SwapModalProps {
    modalOpen: boolean;
    action: 'Mint' | 'Burn';
    coin: 'vUSD' | 'vRSV';
    closeModal: () => void;
    price: number;
}

let loadingInterval;

const Amount = ({ coin, amount = 0, decimals = 6 }) => {
    return (
        <div className="flex items-center space-x-2">
            <AnimatedText className="font-mono" text={amount.toFixed(decimals)} />
            <Ticker>{coin}</Ticker>
        </div>
    );
};

const SwapModal: FC<SwapModalProps> = ({ modalOpen, closeModal, action, coin, price }) => {
    const reach = loadStdlib('ALGO');
    const wallet = useSelector((state: RootState) => state.reach_wallet);
    const [inputString, setInputString] = useState('');
    const [inputNumber, setInputNumber] = useState(0);
    const [percent, setPercent] = useState(0);
    const [algoBalance, setAlgoBalance] = useState(0);
    const [coinBalance, setCoinBalance] = useState(0);
    const [swapping, setSwapping] = useState(false);
    const [opting, setOpting] = useState(false);
    const [transactionDone, setTransactionDone] = useState(false);
    const [swapOutput, setSwapOutput] = useState(0);

    const updateBalance = async () => {
        let cBalance = 0;
        let aBalance = 0;
        if (wallet) {
            const API = new api(ALGO_NODE_API);
            await API.get(
                `v2/accounts/${wallet?.address}`,
                (data) => {
                    aBalance = Math.max(0, (data['amount'] || 0) - (data['min-balance'] || 0) - 0.01) / Math.pow(10, 6);
                    setAlgoBalance(aBalance);
                    const asset = data['assets']?.find(
                        (a) => a['asset-id'] === (coin === 'vUSD' ? COIN_ID : RESERVE_ID),
                    );
                    cBalance = (asset?.amount || 0) / Math.pow(10, 4);
                    setCoinBalance(cBalance);
                },
                () => {
                    setAlgoBalance(0);
                    setCoinBalance(0);
                },
            );
        }
        return [aBalance, cBalance];
    };

    const updateInput = (input: string) => {
        if (!input) {
            setInputString('');
            setInputNumber(0);
        } else {
            setInputString(input);
            const value = Number.parseFloat(input);
            if (!Number.isNaN(value) && value >= 0) {
                setInputNumber(value);
            }
        }
    };

    useEffect(() => {
        if (wallet) {
            updateBalance();
            loadingInterval = setInterval(() => {
                setPercent((p) => {
                    if (p >= 99) updateBalance();
                    return (p + 1) % 100;
                });
            }, 100);
        }
        return () => {
            clearInterval(loadingInterval);
        };
    }, []);

    const calculateOutput = () => {
        return inputNumber * (action === 'Burn' ? price : 1 / price);
    };

    const output = useMemo(calculateOutput, [inputNumber, price]);
    const fee = (action === 'Burn' ? output : inputNumber) * 0.01;

    const doAction = async () => {
        setSwapping(true);
        try {
            const account = await reach.getDefaultAccount();
            if (!(await account.tokenAccepted(coin === 'vUSD' ? COIN_ID : RESERVE_ID))) {
                setOpting(true);
                await account.tokenAccept(coin === 'vUSD' ? COIN_ID : RESERVE_ID);
                setOpting(false);
            }
            const contract = account.contract(backend, APPLICATION_ID);
            await contract.apis.Claimant[`${action.toLowerCase()}${coin === 'vUSD' ? 'Stable' : 'Reserve'}`](
                inputNumber * Math.pow(10, action === 'Mint' ? 6 : 4),
            );
        } catch (e) {
            message(e.toString());
        }
        const [aBalance, cBalance] = await updateBalance();
        setSwapOutput(action == 'Mint' ? cBalance - coinBalance : aBalance - algoBalance + 0.003);
        setTransactionDone(true);
    };

    return (
        <div className="w-screen max-w-screen-md">
            <Card>
                <div className="text-2xl p-4 font-josefin-bold flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <span>{action === 'Burn' ? <FaFire /> : <FaCoins />}</span>
                        <span>
                            {action} {coin}
                        </span>
                        <span className="font-mono text-sm opacity-50">
                            ASA #{coin === 'vUSD' ? COIN_ID : RESERVE_ID}
                        </span>
                    </div>
                    <Img src={`/assets/${coin.toLowerCase()}.svg`} className="w-16 h-16" />
                </div>
                {!swapping && (
                    <div className="py-4 space-y-2">
                        <div className="flex justify-center space-x-2 w-full">
                            <Input
                                type="number"
                                value={inputString}
                                className={inputString ? 'font-mono' : ''}
                                onChange={updateInput}
                                placeholder={`Enter amount...`}
                                icon={<Ticker>{action === 'Burn' ? coin : 'ALGO'}</Ticker>}
                            />
                            <Button
                                secondary
                                className="font-bold"
                                onClick={() => {
                                    setInputString(
                                        (action === 'Burn'
                                            ? coinBalance?.toFixed(6)
                                            : Math.floor(algoBalance)?.toFixed(6)) || '0',
                                    );
                                    setInputNumber((action === 'Burn' ? coinBalance : Math.floor(algoBalance)) || 0);
                                }}
                            >
                                Max
                            </Button>
                        </div>
                        <div className="flex flex-col md:flex-row justify-center items-center space-x-2 w-full opacity-80">
                            <span>Available balance:</span>
                            <span className="flex space-x-2">
                                <Amount
                                    coin={action === 'Burn' ? coin : 'ALGO'}
                                    amount={action === 'Burn' ? coinBalance : algoBalance}
                                />
                                <div className="relative">
                                    <svg className="w-8 h-8 flex justify-center items-center">
                                        <circle
                                            className="opacity-0"
                                            strokeWidth={5}
                                            stroke="currentColor"
                                            fill="transparent"
                                            r={10}
                                            cx={16}
                                            cy={16}
                                        />
                                        <circle
                                            className="text-blue-400 transition-all"
                                            strokeWidth={5}
                                            strokeDasharray={20 * Math.PI}
                                            strokeDashoffset={20 * Math.PI - (percent / 100) * 20 * Math.PI}
                                            strokeLinecap="round"
                                            stroke="currentColor"
                                            fill="transparent"
                                            r={10}
                                            cx={16}
                                            cy={16}
                                        />
                                    </svg>
                                    <div className="absolute w-full h-full flex justify-center items-center top-0">
                                        <Info>
                                            Your account balance will update automatically. <Ticker>ALGO</Ticker>{' '}
                                            balance is adjusted for minimum account balance.
                                        </Info>
                                    </div>
                                </div>
                            </span>
                        </div>
                    </div>
                )}
                <div className="w-full p-4">
                    <div className="bg-white bg-opacity-5 rounded-lg divide-y divide-grey-800">
                        <div className="p-4 w-full md:flex justify-between">
                            <div className="font-bold flex items-center space-x-2">
                                <GiPayMoney className="text-red-500" />
                                <span>You will pay</span>
                            </div>
                            <div className="flex justify-end">
                                <Amount
                                    coin={action === 'Burn' ? coin : 'ALGO'}
                                    decimals={action === 'Burn' ? 4 : 6}
                                    amount={action === 'Mint' ? inputNumber * 1.01 : inputNumber}
                                />
                            </div>
                        </div>
                        <div className="p-4 w-full md:flex justify-between">
                            <div className="font-bold flex items-center space-x-2">
                                <GiReceiveMoney className="text-green-500" /> <span>You will receive</span>
                            </div>
                            <div className="flex justify-end">
                                <Amount
                                    coin={action === 'Mint' ? coin : 'ALGO'}
                                    amount={Math.max(0, output - (action === 'Mint' ? 0 : fee))}
                                    decimals={action === 'Mint' ? 4 : 6}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-end space-x-2 items-center text-sm p-4 opacity-80">
                        <span>Fee:</span>
                        <Amount coin="ALGO" amount={fee} />
                        <Info>
                            <span className="inline-block">
                                <Amount coin="ALGO" amount={0.9 * fee} />
                            </span>{' '}
                            will be added to <Ticker>ALGO</Ticker> reserves
                        </Info>
                    </div>
                </div>
                {swapping && (
                    <div className="opacity-80 flex justify-center font-bold text-lg">
                        {opting ? (
                            <span>
                                Please sign the transaction to opt into <Ticker>{coin}</Ticker>
                            </span>
                        ) : transactionDone ? (
                            <div className="flex flex-col justify-center items-center">
                                <span>All done!</span>
                                <div className="flex space-x-2 items-center">
                                    <Amount coin={action !== 'Mint' ? coin : 'ALGO'} amount={inputNumber} />
                                    <FaArrowRight />{' '}
                                    <Amount coin={action === 'Mint' ? coin : 'ALGO'} amount={swapOutput} />
                                </div>
                            </div>
                        ) : (
                            <span>Please sign the swap transaction.</span>
                        )}
                    </div>
                )}
                <div className="flex space-x-4 justify-center py-8">
                    <Button secondary className="font-josefin text-lg" onClick={closeModal}>
                        {transactionDone ? 'Return' : 'Cancel'}
                    </Button>
                    {!swapping && (
                        <Button
                            disabled={
                                (action === 'Mint' && inputNumber < 0.001) ||
                                inputNumber > (action === 'Burn' ? coinBalance : algoBalance)
                            }
                            icon={action === 'Burn' ? <FaFire /> : <FaCoins />}
                            className="font-josefin-bold text-lg"
                            onClick={doAction}
                        >
                            {action}
                        </Button>
                    )}
                </div>
            </Card>
        </div>
    );
};

export default SwapModal;
