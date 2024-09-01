import BrandsNameSlider from "@/Sections/BrandsNameSlider"
import CreateAndSell from "@/Sections/CreateAndSell"
import DiscoverCollections from "@/Sections/DiscoverCollections"
import Hero from "@/Sections/Hero"
import ItemCollection from "@/Sections/ItemCollection"
import TopCollections from "@/Sections/TopCollections"


const companyNames: string[] = [
  "Binance",
  "TransferWise",
  "Coinbase",
  "Kraken",
  "Bitfinex",
  "Gemini",
  "Revolut",
  "Robinhood",
  "PayPal",
  "Square"
];
const brandNames: string[] = [
  "CryptoMarket",
  "FinTransfer",
  "BlockBase",
  "OceanTrade",
  "CoinHive",
  "StarTrader",
  "NeoBank",
  "TradeHub",
  "PayWave",
  "FinanceSquare"
];
const HomePage = () => {
  return (
    <div className="min-h-screen  overflow-hidden ">
        <Hero/>
        <BrandsNameSlider companyNames={companyNames}/>
        <BrandsNameSlider companyNames={brandNames}/>
        <ItemCollection/>
        <DiscoverCollections/>
        <TopCollections/>
        <CreateAndSell/>
    </div>
  )
}

export default HomePage