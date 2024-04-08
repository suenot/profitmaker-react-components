import * as React from "react"
import {
  ChakraProvider,
} from "@chakra-ui/react"
import theme from "./theme"
import {
  RouterProvider,
} from "react-router-dom";
import {router} from "./router";
import useSize from '@react-hook/size';

// import { useTranslation } from 'react-i18next'

// const theme = extendTheme({
//   config: {
//     initialColorMode: 'dark',
//     useSystemColorMode: false,
//   },
// })

export const App = () => {
  // const { t, i18n } = useTranslation()
  // i18n.changeLanguage('ru');
  return <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
}
