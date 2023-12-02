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

export const LanguageListUi = () => {
  const bg = useColorModeValue("#fff", "#181818");

  const data = [
    {
      symbold: 'ru',
      originalName: 'Русский',
      englishName: 'Russian',
    },
    {
      symbold: 'en',
      originalName: 'English',
      englishName: 'English',
    },
    {
      symbold: 'uz',
      originalName: 'O\'zbekcha',
      englishName: 'Uzbek',
    },
    {
      symbold: 'uk',
      originalName: 'Українська',
      englishName: 'Ukrainian',
    },
    {
      symbold: 'by',
      originalName: 'Беларуская',
      englishName: 'Belarusian',
    },
    {
      symbold: 'kk',
      originalName: 'Қазақша',
      englishName: 'Kazakh',
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
              <Tr key={item.symbold}>
                <Td>{item.symbold}</Td>
                <Td>
                  <Flex alignItems="center">
                    <Box>{item.originalName}</Box>
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
