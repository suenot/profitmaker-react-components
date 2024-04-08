import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react"
import { Candles } from "../Candles/TradingView/Candles"

export const Widget = ({ title = "Binance ETH/BTC", content = "some content" }: {
  title?: string,
  content?: any
}) => {
  const bg = useColorModeValue("#fff", "#181818");
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      height="100%"
      p={0}
      sx={{ position: "relative" }}
      bg={bg}
    >
      {/* <Box p="6"> */}
        <Heading size='sm' mb={4} p={1} borderBottom="1px solid #bebebe">{title}</Heading>
        {/* <Text>{content}</Text> */}
        <Candles />
      {/* </Box> */}
    </Box>
  )
}

export default Widget
