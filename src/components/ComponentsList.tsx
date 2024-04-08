import { PaymentUi } from "./PaymentUi"
import { Unit } from "./Unit"
import { UnitList } from "./UnitList"
import { WalletUi } from "./WalletUi"
import { SchemaSandbox } from "./SchemaSandbox"
import { WalletList } from "./WalletList"
import { PortfolioList } from "./PortfolioList"
import { LanguageList } from "./LanguageList"
import { Echarts } from "./Echarts"
import { Switch } from "../SwitchMode"
import Dashboard from "./Dashboard"
import { Candles } from "./Candles/TradingView/Candles"
import { Widget } from "./Widget/Widget"

import {
  ChakraProvider,
  extendTheme,
  Container
} from "@chakra-ui/react"

export const ComponentsList = () => {
  return <Container>
    <br />
    <PaymentUi />
    <br />
    <Unit />
    <br />
    <UnitList />
    <br />
    <WalletList />
    <br />
    <PortfolioList />
    <br />
    <LanguageList />
    <br />
    <div>Old:</div>
    <WalletUi />
    <br />
    <SchemaSandbox />
    <br />
    <Echarts />
    <br />
    <Dashboard />
    <br />
    <Switch />
    <br />
    <Widget />

  </Container>
}
