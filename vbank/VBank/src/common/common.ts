import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { Colors, MessageType } from '../redux/types';
import { createMessage } from '../redux/actions';
import { COLORS } from './const';

dayjs.extend(utc);
dayjs.extend(timezone);

export function useWindowSize(): number[] {
    const [size, setSize] = useState([0, 0]);
    if (typeof window !== 'undefined') {
        useLayoutEffect(() => {
            function updateSize() {
                setSize([window.innerWidth, window.innerHeight]);
            }

            window.addEventListener('resize', updateSize);
            updateSize();
            return () => window.removeEventListener('resize', updateSize);
        }, []);
    }
    return size;
}

export const getTimestampFromRound = (round: number): number => {
    const blocks = {
        16500000: 1632833752,
        17000000: 1635024940,
        17500000: 1637218966,
        18000000: 1639406526,
        18500000: 1641590545,
        19000000: 1643787599,
        19500000: 1645987971,
        20000000: 1648182789,
        20500000: 1650365747,
        21000000: 1652541108,
        21500000: 1654719427,
    };
    let desiredBlock = round - (round % 500000);
    if (!blocks[desiredBlock] || !blocks[desiredBlock + 500000]) {
        desiredBlock = Math.max(...Object.keys(blocks).map((b) => Number.parseInt(b))) - 500000;
    }
    const rounds = 500000;
    const seconds = blocks[desiredBlock + 500000] - blocks[desiredBlock];
    const averageRoundTime = seconds / rounds;
    const blocksSince = round - desiredBlock;
    return blocks[desiredBlock] + blocksSince * averageRoundTime;
};

export const timeSince = (timestamp: number): string => {
    const formatText = (interval: number, unit: string) => {
        const value = Math.floor(interval);
        if (value === 1) return `${value} ${unit}`;
        return `${value} ${unit}s`;
    };
    const seconds = dayjs().unix() - timestamp;

    let interval = seconds / 31536000;
    if (interval > 1) return formatText(interval, 'year');
    interval = seconds / 2592000;
    if (interval > 1) return formatText(interval, 'month');
    interval = seconds / 86400;
    if (interval > 1) return formatText(interval, 'day');
    interval = seconds / 3600;
    if (interval > 1) return formatText(interval, 'hour');
    return '< 1 hour';
};

export const timeLeft = (timestamp: number): string => {
    const now = dayjs().unix();
    const distance = timestamp - now;
    const days = Math.floor(distance / (60 * 60 * 24));
    const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((distance % (60 * 60)) / 60);
    const seconds = Math.floor(distance % 60);

    const doubleDigits = (value) => {
        if (value < 10) return `0${value}`;
        return value;
    };

    return `${doubleDigits(days)}D:${doubleDigits(hours)}H:${doubleDigits(minutes)}M:${doubleDigits(seconds)}S`;
};

export const localSave = <T>(name: string, value?: T): void => {
    try {
        if (typeof localStorage !== 'undefined') {
            if (value) localStorage.setItem(name, JSON.stringify(value));
            else localStorage.removeItem(name);
        }
    } catch (e) {
        console.error(e);
    }
};

export const localLoad = <T>(name: string): T => {
    try {
        if (typeof localStorage !== 'undefined') return JSON.parse(localStorage.getItem(name));
    } catch (e) {
        console.error(e);
    }
};

export const message = (message: string, timeout?: number, type: MessageType = 'error'): void => {
    createMessage(message, type, timeout);
};

export const appendClasses = (
    className: '' | 0 | false | null | undefined | string,
    additionalClassNames: ('' | 0 | false | null | undefined | string)[],
): string => {
    let baseClass = className || '';
    additionalClassNames.forEach((cls) => {
        if (cls) {
            baseClass += ` ${cls}`;
        }
    });
    return baseClass;
};

export const truncate = (text: string, length: number): string => {
    if (text.length > length) {
        return `${text.substring(0, length - 3).trim()}...`;
    }
    return text;
};

export const formatPrice = (price?: number, precision = 4, includeExponential = false): string => {
    if (!price || price === 0) return '–';
    if (price > 100)
        return Math.round(price)
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (price > 1) return price.toFixed(precision);
    if (price < 0.000001) return includeExponential ? price.toPrecision(precision) : '<0.00001';
    if (price < 0.00001) return price.toPrecision(1);
    if (price < 0.0001) return price.toPrecision(2);
    if (price < 0.001) return price.toPrecision(3);
    if (price < 0.01) return price.toPrecision(4);
    if (price < 1) return precision === 0 ? price.toFixed(precision) : price.toPrecision(precision);
    return price.toFixed(precision === undefined ? 4 : precision);
};

export const BREAKPOINTS = {
    xs2: 320,
    xs: 414,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
};

export const getBreakpoint = (size: number[]): string => {
    const width = size[0];
    if (width >= BREAKPOINTS.xl) return 'xl';
    if (width >= BREAKPOINTS.lg) return 'lg';
    if (width >= BREAKPOINTS.md) return 'md';
    if (width >= BREAKPOINTS.sm) return 'sm';
    if (width >= BREAKPOINTS.xs) return 'xs';
    return 'xs2';
};

export const asNumber = (str?: string, asFloat = false): number => {
    if (str && str !== '') {
        const parsed = asFloat ? Number.parseFloat(str) : Number.parseInt(str);
        if (!Number.isNaN(parsed)) return parsed;
    }
    return 0;
};

export const getColors = (colors: string): Colors => {
    return COLORS[colors];
};

export const usePrevious = <T>(value: T): T => {
    const ref = useRef<T>();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
};

export const sumArrayValues = (values) => {
    return values.reduce((p, c) => p + c, 0);
};

export const weightedMean = (factorsArray, weightsArray) => {
    return (
        sumArrayValues(factorsArray.map((factor, index) => factor * weightsArray[index])) / sumArrayValues(weightsArray)
    );
};

export const lightenColor = (color: string, amount: number): string => {
    const num = parseInt(color, 16);
    const r = (num >> 16) + amount;
    const b = ((num >> 8) & 0x00ff) + amount;
    const g = (num & 0x0000ff) + amount;
    const newColor = g | (b << 8) | (r << 16);
    return '#' + newColor.toString(16);
};

export const formatAmount = (amount: number): string => {
    if (amount < 10) return amount.toFixed(2);
    if (amount < 100) return amount.toFixed(1);
    if (amount < 1000) return Math.floor(amount).toString();
    if (amount < 10000) return `${(amount / 1000).toFixed(1)}K`;
    if (amount < 1000000) return `${Math.floor(amount / 1000)}K`;
    if (amount < 10000000) return `${(amount / 1000000).toFixed(1)}M`;
    if (amount < 1000000000) return `${Math.floor(amount / 1000000)}M`;
    if (amount < 1000000000000) return `${Math.floor(amount / 1000000000)}B`;
    return `${Math.floor(amount / 1000000000000)}T`;
};

export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatWallet = (address: string, length = 4, includeSpace = true): string => {
    if (address.length > 16) {
        return `${address.substring(0, length)}${includeSpace ? ' ⋯ ' : '⋯'}${address.substring(
            address.length - length,
            address.length,
        )}`;
    }
    return address;
};
