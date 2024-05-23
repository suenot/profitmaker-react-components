import * as React from "react"

import {
  Box,
  useColorModeValue,
  Text,
  Flex,
  Avatar
} from "@chakra-ui/react"
import { EchartsUi } from "./EchartsUi"
import * as echarts from 'echarts';
import Identicon from "./Identicon";

const option = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center',
    show: false
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: false,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1048, name: 'USDT' },
        { value: 735, name: 'BTC' },
        { value: 580, name: 'BNB' },
        { value: 484, name: 'LTC' },
        { value: 300, name: 'NANO' }
      ]
    }
  ]
};


export const PortfolioUi = () => {

  const bg = useColorModeValue('#fff', '#181818');

  const item = {
    id: 1,
    name: 'Binance',
    avatar: undefined,
  }

  return (
    <Box>
      <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4' bg={bg}>
        <Flex alignItems="center">
          <Box mr={2}>
            {item?.avatar ? (
              <Avatar
                sx={{ width: "32px", height: "32px" }}
                ml={1}
                name=""
                src={item?.avatar}
                mb="1"
              />
            ) : (
              <Box ml={1}>
                <Identicon linkId={item.id} size={24} />
              </Box>
            )}
          </Box>
          <Box><Text fontSize='2xl'>{item.name}</Text></Box>
        </Flex>
        <EchartsUi options={option} />
      </Box>
    </Box>
  )
}
