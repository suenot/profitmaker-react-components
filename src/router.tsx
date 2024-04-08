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
import { ComponentsList } from "./components/ComponentsList"
import {
  createBrowserRouter,
} from "react-router-dom";

export const router = createBrowserRouter([
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
