import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
  Container
} from "@chakra-ui/react"
import { PaymentUi } from "./components/PaymentUi"
import { Unit } from "./components/Unit"
import { UnitList } from "./components/UnitList"
import { WalletUi } from "./components/WalletUi"
import { SchemaSandbox } from "./components/SchemaSandbox"
import { WalletList } from "./components/WalletList"
import { PortfolioList } from "./components/PortfolioList"
import { LanguageList } from "./components/LanguageList"
import { Echarts } from "./components/Echarts"
import { Switch } from "./SwitchMode"
import Dashboard from "./components/Dashboard"
import { Candles } from "./components/Candles/TradingView/Candles"
import theme from "./theme"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useSize from '@react-hook/size';

// import { useTranslation } from 'react-i18next'

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
// })

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
  </Container>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <ComponentsList />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/candles",
    element: <div style={{minHeight: '100%'}}>
      <Candles />
    </div>,
  },
]);

export const App = () => {
  // const { t, i18n } = useTranslation()
  // i18n.changeLanguage('ru');
  return <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
}
