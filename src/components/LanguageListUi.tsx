import * as React from "react";
import { Suspense } from 'react';
import { useState, useEffect, FunctionComponent } from 'react';
import Identicon from "./Identicon";
import ISO6391 from 'iso-639-1';

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
  useColorModeValue,
} from "@chakra-ui/react";
import "/node_modules/flag-icons/css/flag-icons.min.css"
import { useTranslation } from 'react-i18next'

import { languageToCountry } from '../languageToCountry';

function Flag({ languageCode }: { languageCode: string}) {

  const countryCode = languageToCountry[languageCode];

  if (!countryCode) {
    return <Box sx={{border: '1px solid grey', borderRadius: '100%', height: '24px', width: '24px'}}></Box>;
  }
  return <span className={`fi fi-${countryCode} fis`} style={{borderRadius: '100%', height: '24px', width: '24px'}}></span>
}

const allLanguages = ISO6391.getAllCodes().map(code => ({
  code,
  name: ISO6391.getName(code),
}));

export const LanguageListUi = ({
  search,
  setSearch,
  data,
  setData,
}: {
  search: string;
  setSearch: (search: string) => void;
  data: any[];
  setData: (data: any[]) => void;
}) => {
  const bg = useColorModeValue("#fff", "#181818");
  const { t, i18n } = useTranslation()

  // console.log('data', data, data.length);
  // if (data.length == 0) {
  //   setData(allLanguages);
  // }

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
        <Input w={"100%"} placeholder={t('Search')} />
      </Box>
      <TableContainer sx={{maxHeight: '320px', overflowY: 'auto'}}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>{t('Id')}</Th>
              <Th>{t('Name')}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allLanguages.map((item) => {
              return (
                <Tr key={item.code}>
                  <Td>{item.code}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Box mr={2}>
                        <Flag languageCode={item.code} />
                      </Box>
                      <Box>{item.name}</Box>
                    </Flex>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
