import * as React from "react";
import Identicon from "./Identicon";
import {
  Box,
  Input,
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { formatNumber } from "../imports/formatNumber";

export const PortfolioListUi = () => {
  const unitId = 7005;
  const bg = useColorModeValue("#fff", "#181818");

  const data = [
    {
      id: 30829,
      name: "Кадетский фонд",
      avatar: "",
    },
    {
      id: 41080,
      name: "Группа захвата",
      avatar: "",
    },
    {
      id: 41000,
      name: "Бюджет Deep.memo",
      avatar: "",
    },
    {
      id: 41001,
      name: "Бюджет Deep.game",
      avatar: "",
    },
    {
      id: 41002,
      name: "Бюджет Deep.social",
      avatar: "",
    },
    {
      id: 41003,
      name: "Бюджет Deep.fund",
      avatar: "",
    },
    {
      id: 41004,
      name: "Бюджет Deep.art",
      avatar: "",
    },
    {
      id: 41005,
      name: "Бюджет Deep.market",
      avatar: "",
    },
    {
      id: 41006,
      name: "Бюджет Deep.cafe",
      avatar: "",
    },
    {
      id: 41007,
      name: "Бюджет Deep.land",
      avatar: "",
    },
    {
      id: 41008,
      name: "Бюджет Deep.network",
      avatar: "",
    },
  ]


  return (
    <Box
      maxW="sm"
      minW="sm"
      w="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={0}
      sx={{ position: "relative" }}
      bg={bg}
    >
      <Box p={4}>
        <Input w={"100%"} placeholder="Search" />
      </Box>
      <TableContainer sx={{maxHeight: '320px', overflowY: 'auto'}}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item) => (
              <Tr key={item.id}>
                <Td>#{item.id}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Box mr={2}>
                      {item.avatar ? (
                        <Avatar
                          sx={{ width: "24px", height: "24px" }}
                          ml={1}
                          name=""
                          src={item.avatar}
                          mb="1"
                        />
                      ) : (
                        <Box ml={1}>
                          <Identicon linkId={item.id} size={24} />
                        </Box>
                      )}
                    </Box>
                    <Box>{item.name}</Box>
                  </Flex>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
