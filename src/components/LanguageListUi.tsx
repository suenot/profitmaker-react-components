import * as React from "react";

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

function Flag({ countryCode }: { countryCode: string}) {
  if (!countryCode) {
    return <Box sx={{border: '1px solid grey', borderRadius: '100%', height: '24px', width: '24px'}}></Box>;
  }
  return <span className={`fi fi-${countryCode} fis`} style={{borderRadius: '100%', height: '24px', width: '24px'}}></span>
}

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
        <Input w={"100%"} placeholder={t('Search')} onChange={(e) => {setSearch(e.target.value)}} />
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
            {data.map((item) => {
              return (
                <Tr key={item.code}>
                  <Td>{item.countryCode}</Td>
                  <Td>
                    <Flex alignItems="center">
                      <Box mr={2}>
                        <Flag countryCode={item.countryCode} />
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
