import * as React from "react"
import {
  ChakraProvider,
  extendTheme,
  Container
} from "@chakra-ui/react"
import { PaymentUi } from "./components/PaymentUi"
import { UnitUi } from "./components/UnitUi"
import { WalletUi } from "./components/WalletUi"
import { SchemaSandbox } from "./components/SchemaSandbox"
import { UnitPublicUi } from "./components/UnitPublicUi"
import { UnitEditUi } from "./components/UnitEditUi"
import { WalletListUi } from "./components/WalletListUi"
import { UnitListUi } from "./components/UnitListUi"
import { PortfolioListUi } from "./components/PortfolioListUi"
import { LanguageListUi } from "./components/LanguageListUi"
import { Switch } from "./SwitchMode"
import theme from "./theme"
import { useTranslation } from 'react-i18next'

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
// })

export const App = () => {
  const { t, i18n } = useTranslation()
  // i18n.changeLanguage('ru');
  return <ChakraProvider theme={theme}>
    <Container>
      <h1>{t('Welcome to React')}</h1>
      <br />
      <PaymentUi />
      {/* <br /> */}
      {/* <UnitUi /> */}
      <br />
      <UnitUi />
      <br />
      {/* <WalletUi /> */}
      {/* <br /> */}
      {/* <SchemaSandbox /> */}
      {/* <br /> */}
      <WalletListUi />
      <br />
      <Switch />
      <br />
      <UnitListUi />
      <br />
      <PortfolioListUi />
      <br />
      <LanguageListUi />
      <br />
    </Container>
  </ChakraProvider>
}
