/*
  currency
 */
type EMarket = KRW | USD | BTC | ETH
type ECurrency = EMarket | ECoin

type KRW = 'KRW'
type USD = 'USD'
/*
  coin
 */
type ECoin = ALL | BTC | ETH | DASH | LTC | ETC | XRP | BCH | QTUM | BTG | IOTA
  | COB | CMT | REP | EOS | ETHOS | GNT | NGC | OMG | SAN | SPHTX | SNT | PAY | BAT | GTC | TRX

type ALL = 'ALL'
type BTC = 'BTC' // Bitcoin
type ETH = 'ETH' // Ethereum
type DASH = 'DASH' // Dash
type LTC = 'LTC' // Litecoin
type ETC = 'ETC' // Ethereum Classic
type XRP = 'XRP' // Ripple
type BCH = 'BCH' // Bitcoin Cach
type QTUM = 'QTUM' // QTUM
type BTG = 'BTG' // Bitcoin Gold
type IOTA = 'IOTA' // IOTA
type COB = 'COB' // Cobinhood
type CMT = 'CMT' // Cyber Miles
type REP = 'REP' // Augur
type EOS = 'EOS' // EOS
type ETHOS = 'ETHOS' // Ethos
type GNT = 'GNT' // Golem
type NGC = 'NGC' // Naga
type OMG = 'OMG' // OmiseGO
type SAN = 'SAN' // Santiment Network Token
type SPHTX = 'SPHTX' // Sophia TX
type SNT = 'SNT' // Status Network Token
type PAY = 'PAY' // Ten X
type BAT = 'BAT' // Basic Attention Token
type GTC = 'GTC' // Game Credit
type TRX = 'TRX' // TRON

/*
  exchange
 */
type EExchange = 'bithumb' | 'coinone' | 'bittrex' | 'cobinhood'

/*
  operation
 */
type EOperation = Ticker | Transaction | Order

type Ticker = 'ticker'
type Transaction = 'transaction'
type Order = 'order'

type ETransaction = BID | ASK

type BID = 'bid'
type ASK = 'ask'

/*
  schema
 */
interface ExchangeSchema {
  exchange: EExchange
  coin: ECoin
  latency: number
}

type WithLatency<T> = T & { latency: number }

interface TickerSchema extends ExchangeSchema {
  price: number    // 기축통화 1코인 환산 가격 환산 가격
  market: EMarket  // 기축통화
  minPrice: number
  maxPrice: number
  volume: number
  date: number
  avgPrice?: number
}

interface TransactionSchema extends ExchangeSchema {
  price: number       // 기축통화 1코인 환산 가격 환산 가격
  market: EMarket     // 기축통화
  type: ETransaction  // 판/구매 (ask, bid)
  volume: number      //거래 coin 수량
  total: number       // 총 거래금액
  date: number
}

interface OrderSchema extends ExchangeSchema {
  market: EMarket     // 기축통화
  date: number // 현재 시간 Timestamp
  coin: ECoin // 주문 화폐단위
  bids: OrderBook[] // 구매요청
  asks: OrderBook[] // 판매요청
}

interface OrderBook {
  quantity: number
  price: number
}
