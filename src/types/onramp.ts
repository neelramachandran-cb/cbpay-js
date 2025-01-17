export type DestinationWallet = {
  /* Destination address where the purchased assets will be sent. */
  address: string;
  /** List of networks enabled for the associated address. All assets available per network are displayed to the user. */
  blockchains?: string[];
  /** List of assets enabled for the associated address. They are appended to the available list of assets. */
  assets?: string[];
  /** Restrict the networks available for the associated assets. */
  supportedNetworks?: string[];
};

export type OnRampExperience = 'buy' | 'send';

type BaseOnRampAppParams = {
  /** The destination wallets supported by your application (BTC, ETH, etc). */
  destinationWallets: DestinationWallet[];
  /** The preset input amount as a crypto value. i.e. 0.1 ETH. This will be the initial default for all cryptocurrencies. */
  presetCryptoAmount?: number;
  /**
   * The preset input amount as a fiat value. i.e. 15 USD.
   * This will be the initial default for all cryptocurrencies. Ignored if presetCryptoAmount is also set.
   * Also note this only works for a subset of fiat currencies: USD, CAD, GBP, EUR
   * */
  presetFiatAmount?: number;
  /** The default network that should be selected when multiple networks are present. */
  defaultNetwork?: string;
  /** The default experience the user should see: either transfer funds from Coinbase (`'send'`) or buy them (`'buy'`). */
  defaultExperience?: OnRampExperience;
  handlingRequestedUrls?: boolean;
  /** ID used to link all user transactions created during the session. */
  partnerUserId?: string;
  connectedWalletName?: string;
  connectedWalletImage?: string;
};

export type OnRampAggregatorAppParams = {
  quoteId: string;
  defaultAsset: string;
  defaultNetwork?: string;
  defaultPaymentMethod: string;
  presetFiatAmount: number;
  fiatCurrency: string;
};

export type OnRampAppParams =
  | BaseOnRampAppParams
  | (BaseOnRampAppParams & OnRampAggregatorAppParams);
