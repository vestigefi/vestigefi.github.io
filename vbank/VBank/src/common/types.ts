export interface APIProviderSerializer {
    id: string;
    name: string;
    url: string;
    active: boolean;
    volume24h: number;
    tvl: number;
}

export interface APIProviderTVLSerializer {
    timestamp: number;
    T2?: number;
    AF?: number;
    PT?: number;
    HS?: number;
}

export interface APIRecordSerializer {
    timestamp: number;
    price: number;
    volume: number;
}

export interface APICandleSerializer {
    type: string;
    timestamp: number;
    open: number;
    low: number;
    high: number;
    close: number;
    volume: number;
}

export interface APIPricesSerializer {
    records: APIRecordSerializer[];
    candles1m: APICandleSerializer[];
    candles1h: APICandleSerializer[];
    candles1d: APICandleSerializer[];
}

export interface APIPriceSerializer {
    timestamp: number;
    price: number;
}

export interface APICurrencyPricesSerializer {
    USD?: number;
    EUR?: number;
    GBP?: number;
    BTC?: number;
}

export interface APIAssetSerializer {
    id: number;
    created_round: number;
    name: string;
    ticker: string;
    decimals: number;
    creator: string;
    reserve?: string;
    verified: boolean;
    supply: string;
    circulating_supply: string;
    url?: string;
    transactions: number;
    has_clawback: boolean;
    has_freeze: boolean;
}

export interface APIListAssetSerializer {
    id: number;
    name: string;
    ticker: string;
    verified: boolean;
    created_round: number;
    first_pool_round?: number;
    price: number;
    change1h: number;
    change24h: number;
    volume24h: number;
    tvl: number;
    views1h: number;
    views24h: number;
    market_cap: number;
    fdmc: number;
    dexes: string[];
}

export interface APIPoolSerializer {
    id: number;
    token_id: number;
    application_id: number;
    provider: string;
    created_round: number;
    asset_1_id: number;
    asset_2_id?: number;
    volatility: number;
    liquidity: number;
    address: string;
    price?: number;
    price1h?: number;
    price24h?: number;
    volume_1_24h?: number;
    volume_2_24h?: number;
    fee: number;
    token_ratio?: number;
    last_traded: number;
}

export interface APIPoolLiquiditySerializer {
    timestamp: number;
    liquidity: number;
    token_ratio?: number;
}

export interface APIAssetTransactionsSerializer {
    timestamp: number;
    transactions: number;
    swaps?: number;
}

export interface APIAccountBalanceSerializer {
    address: string;
    balance: string;
}

export interface APIAssetContributorSerializer {
    address: string;
    percentage: number;
}

export interface APICurrencyPriceSerializer {
    currency?: string;
    timestamp: number;
    price: number;
}

export interface APIAssetViews {
    views1h: number;
    views24h: number;
}

export interface APISwapSerializer {
    provider: string;
    pool_id: number;
    asset_1_id: number;
    asset_2_id?: number;
    timestamp: number;
    type: string;
    wallet: string;
    amount_1: number;
    amount_2: number;
    group: string;
}

export interface APIPoolVolumeSerializer {
    id: number;
    provider: string;
    asset_1_id: number;
    asset_2_id?: number;
    application_id: number;
    fee: number;
    liquidity: number;
    volume24h: number;
    volume7d: number;
    apr24h: number;
    apr7d: number;
}

export interface APIPoolVolumeStepSerializer {
    timestamp: number;
    volume: number;
}

export interface APIUserSerializer {
    created?: number;
    last_active?: number;
    name: string;
    colors?: string;
    private: boolean;
    token_amount: number;
    liquidity_amount: number;
    wallets?: string[];
}

export interface APITokenSerializer {
    token: string;
    user: APIUserSerializer;
}

export interface APISignatureSerializer {
    transaction: string;
    pubkey: string;
}

export interface APIAssetValueSerializer {
    id: number;
    name: string;
    ticker: string;
    verified: boolean;
    amount: number;
    value: number;
    real_value?: number;
}

export interface APIPoolTokenValueSerializer {
    id: number;
    asset_1: APIAssetValueSerializer;
    asset_2?: APIAssetValueSerializer | number;
    provider: string;
    percentage: number;
}

export interface APIWalletValueSerializer {
    timestamp: number;
    amount: number;
    assets: APIAssetValueSerializer[];
    pool_tokens: APIPoolTokenValueSerializer[];
}

export interface APITVLSerializer {
    timestamp: number;
    tvl: number;
}

export type WatchlistItem = { name: string; ticker: string };

export type Watchlist = { [key: number]: WatchlistItem };

export interface MetaMessage {
    timestamp: number;
    countdown: number;
    message: string;
}

export interface MetaAd {
    from: number;
    to: number;
    src: string;
    link: string;
    premium: boolean;
}

export interface MetaAsset {
    id: number;
    url?: string;
    message?: string;
}

export interface MetaData {
    messages: MetaMessage[];
    wrappedAssets: number[];
    assets: { [key: number]: MetaAsset };
    ads: MetaAd[];
}

export interface AlgoExplorerVerification {
    description?: string;
    score?: number;
    url?: string;
    reputation?: string;
}

export interface PeraVerification {
    name: string;
    unit_name: string;
    is_verified: boolean;
    verification_tier: string;
    project_url: string;
    project_name: string;
    discord_url: string;
    telegram_url: string;
    twitter_username: string;
    description: string;
}

export interface PageProps {
    meta: MetaData;
    assets: APIListAssetSerializer[];
    assetIcons: string[];
    prices: APICurrencyPricesSerializer;
    asset?: APIAssetSerializer;
    listAsset?: APIListAssetSerializer;
    assetExternal?: {
        explorer?: AlgoExplorerVerification;
        pera?: PeraVerification;
    };
    assetPools?: APIPoolSerializer[];
    userData?: APIUserSerializer;
    pools?: APIPoolVolumeSerializer[];
}

export type SwapType = 'BUY' | 'SELL' | 'SWAP' | 'RSWP' | 'LADD' | 'LREM';

export interface WebsocketVData {
    viewers: number;
}

export interface WebsocketRData {
    asset: number;
    pool: number;
    timestamp: number;
    price: number;
    volume: number;
    liquidity: number;
}

export interface WebsocketTXData {
    provider: string;
    asset_1: number;
    asset_2?: number;
    pool: number;
    round: number;
    timestamp: number;
    action: SwapType;
    amount_1: number;
    amount_2: number;
    wallet: string;
    group: string;
}

export interface WebsocketMSGData {
    name: string;
    private: boolean;
    amount: number;
    msg: string;
}

export interface WebsocketEData {
    detail: string;
}

export interface WebsocketMessage {
    timestamp?: number;
    type: string;
    data: WebsocketVData | WebsocketRData | WebsocketTXData | WebsocketMSGData | WebsocketEData;
}
