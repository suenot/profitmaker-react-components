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

export const WalletListUi = () => {
  const unitId = 7005;
  const bg = useColorModeValue("#fff", "#181818");

  const wallets = [
    {
      id: 20829,
      name: "Кадетский фонд в DOGE",
      avatar: "",
      amount: 1234567.89,
      unitId: 7003,
      unitTicker: "DOGE",
      unitAvatar: "",
      unitName: "Dogecoin",
    },
    {
      id: 30080,
      name: "Группа захвата в DOGE",
      avatar: "",
      amount: 1234567.89,
      unitId: 7003,
      unitTicker: "DOGE",
      unitAvatar: "",
      unitName: "Dogecoin",
    },
    {
      id: 31000,
      name: "Бюджет Deep.memo в USD",
      avatar: "",
      amount: 1567.89,
      unitId: 7005,
      unitTicker: "USD",
      unitAvatar: "",
      unitName: "US Dollar",
    },
  ];

  const units = [
    {
      id: 7005,
      name: "US Dollar",
      ticker: "USD",
      avatar: "",
    },
    {
      id: 7003,
      name: "Dogecoin",
      ticker: "DOGE",
      avatar: "",
    },
  ];

  const portfolios = [
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
  ]


  return (
    <Box
      maxW="xl"
      minW="sm"
      w="xl"
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
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Wallet Name</Th>
              <Th isNumeric>Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {wallets.map((wallet) => (
              <Tr key={wallet.id}>
                <Td>#{wallet.id}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Box mr={2}>
                      {wallet.avatar ? (
                        <Avatar
                          sx={{ width: "24px", height: "24px" }}
                          ml={1}
                          name=""
                          src={wallet.avatar}
                          mb="1"
                        />
                      ) : (
                        <Box ml={1}>
                          <Identicon linkId={wallet.id} size={24} />
                        </Box>
                      )}
                    </Box>
                    <Box>{wallet.name}</Box>
                  </Flex>
                </Td>
                <Td>
                  <Flex alignItems="center" justifyContent="end">
                    <Box>
                      {formatNumber({numberToFormat: wallet.amount, minimumFractionDigits: 2, maximumFractionDigits: 2})} {wallet.unitTicker}
                    </Box>
                    {wallet.unitAvatar ? (
                      <Avatar
                        sx={{ width: "24px", height: "24px" }}
                        ml={1}
                        name=""
                        src={wallet.unitAvatar}
                        mb="1"
                      />
                    ) : (
                      <Box ml={1}>
                        <Identicon linkId={wallet.unitId} size={24} />
                      </Box>
                    )}
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
