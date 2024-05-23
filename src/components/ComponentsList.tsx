import { PaymentUi } from "./PaymentUi"
import { PaymentsList } from "./PaymentsList"
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
import { PortfolioUi } from "./PortfolioUi"

import {
  ChakraProvider,
  extendTheme,
  Container,
  Text
} from "@chakra-ui/react"

export const ComponentsList = () => {
  return <Container>
    <Text fontSize='2xl'>Payment (Transaction, Transfer)</Text>
    <br />
    <PaymentUi />
    <br />
    <PaymentsList />
    <br />
    <Text fontSize='2xl'>Unit (Asset)</Text>
    <Unit />
    <br />
    <UnitList />
    <br />
    <Text fontSize='2xl'>Wallet</Text>
    Old:
    <WalletUi />
    <br />
    <WalletList />
    <br />
    <Text fontSize='2xl'>Portfolio</Text>
    <PortfolioUi />
    <br />
    <PortfolioList />
    <br />
    <Text fontSize='2xl'>Language</Text>
    <LanguageList />
    <br />
    <Text fontSize='2xl'>Other</Text>
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
