export interface ExchangeProps {
    home: string
    accounts?: ReadonlyArray<string>
}

const decentralized: Record<string, ExchangeProps> = {
    "FireflyWallet": {
        "home": "wallet.fchain.io"
    },
    "StellarX": {
        "home": "stellarx.com"
    },
    "StellarTerm": {
        "home": "stellarterm.com"
    },
    "Stellarport": {
        "home": "stellarport.io"
    },
    "InterStellar": {
        "home": "interstellar.exchange"
    }
}

const centralized: Record<string, ExchangeProps> = {
    "Binance": {
        "home": "binance.com",
        "accounts": ["GCO2IP3MJNUOKS4PUDI4C7LGGMQDJGXG3COYX3WSB4HHNAHKYV5YL3VC"]
    },
    "WhiteBIT": {
        "home": "whitebit.com",
        "accounts": ["GDTSOI56XNVAKJNJBLJGRNZIVOCIZJRBIDKTWSCYEYNFAZEMBLN75RMN"]
    },
    "Paribu": {
        "home": "paribu.com",
        "accounts": ["GBTH7BUYE7BPQDMZAD7LZOMFWID2UAW4HBYJUUS5FS64SZWSFFQYJVTC"]
    },
    "Indodax": {
        "home": "indodax.com",
        "accounts": ["GC4KAS6W2YCGJGLP633A6F6AKTCV4WSLMTMIQRSEQE5QRRVKSX7THV6S"]
    },
    "Ripplefox": {
        "home": "ripplefox.com",
        "accounts": ["GCLDH6L6FBLTD3H3B23D6TIFVVTFBLZMNBC3ZOI6FGI5GPQROL4FOXIN"]
    },
    "Liquid": {
        "home": "liquid.com",
        "accounts": ["GA7OPN4A3JNHLPHPEWM4PJDOYYDYNZOM7ES6YL3O7NC3PRY3V3UX6ANM"]
    },
    "Poloniex": {
        "home": "poloniex.com",
        "accounts": ["GCGNWKCJ3KHRLPM3TM6N7D3W5YKDJFL6A2YCXFXNMRTZ4Q66MEMZ6FI2"]
    },
    "Bittrex": {
        "home": "bittrex.com",
        "accounts": ["GB6YPGW5JFMMP2QB2USQ33EUWTXVL4ZT5ITUNCY3YKVWOJPP57CANOF3"]
    },
    "Kraken": {
        "home": "kraken.com",
        "accounts": ["GA5XIGA5C7QTPTWXQHY6MCJRMTRZDOSHR6EFIBNDQTCQHG262N4GGKTM"]
    },
    "OKEX": {
        "home": "okex.com",
        "accounts": ["GBOEEVARKVASOQSSXCAHNTGJTVALJE2QM3AQQ2K3VXACQ6JJREQRJZKB"]
    },
    "AEX": {
        "home": "www.aex.com",
        "accounts": ["GDZCEWJ5TVXUTFH6V5CVDQDE43KRXYUFRHKI7X64EWMVOVYYZJFWIFQ2"]
    },
    "Changelly": {
        "home": "changelly.com",
        "accounts": ["GBV4ZDEPNQ2FKSPKGJP2YKDAIZWQ2XKRQD4V4ACH3TCTFY6KPY3OAVS7"]
    }
}

export {
    centralized,
    decentralized
}