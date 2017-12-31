/*
  currency
 */
type ECurrency = KRW | ECoin

type KRW = 'KRW'

/*
  coin
 */
type ECoin = ALL | BTC | ETH | DASH | LTC | ETC | XRP | BCH

type ALL = 'ALL'
type BTC = 'BTC'
type ETH = 'ETH'
type DASH = 'DASH'
type LTC = 'LTC'
type ETC = 'ETC'
type XRP = 'XRP'
type BCH = 'BCH'

/*
  exchange
 */
type EExchange = 'bithumb' | 'coinone' | 'bittrex'

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
  price: number
  minPrice: number
  maxPrice: number
  volume: number
  date: string
  avgPrice?: number
}

interface TransactionSchema extends ExchangeSchema {
  date: string
  type: ETransaction // 판/구매 (ask, bid)
  price: number // 1 coin 거래 금액
  volume: number //	거래 coin 수량
  total: number // 총 거래금액
}

interface OrderSchema extends ExchangeSchema {
  date: string // 현재 시간 Timestamp
  coin: ECoin // 주문 화폐단위
  paymentBy: ECurrency // 결제 화폐단위
  bids: OrderBook[] // 구매요청
  asks: OrderBook[] // 판매요청
}

interface OrderBook {
  quantity: number
  price: number
}
