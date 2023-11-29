import * as React from "react"
import { useState, useEffect } from 'react';

import {
  Box,
  Text,
  VStack,
  HStack,
  theme,
  Button,
  Editable,
  EditableInput,
  EditablePreview,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  AvatarProps,
  AvatarBadgeProps,
  EditableTextarea,
  Divider,
  Flex
} from "@chakra-ui/react"

export const UnitUi = () => {
  const [unitName, setUnitName] = useState("");
  const [unitTicker, setUnitTicker] = useState("");
  const [unitDescription, setUnitDescription] = useState("");
  const [unitFile, setUnitFile] = useState("");
  const [unitAvatar, setUnitAvatar] = useState("");
  const [unitSrc, setUnitSrc] = useState("");
  return (
    <Box maxW='sm' minW='sm' w='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' p='4'>
    <div>
      <Flex
        align="center"
        justify="center"
      >
        <Avatar size='2xl' name='' src={unitSrc} mb='1' />
      </Flex>
    </div>
    <Editable placeholder="Insert name" value={unitName} onChange={async (value) => {
      setUnitName(value)
    }}>
      <EditablePreview w={'100%'} />
      <EditableInput />
    </Editable>
    <Editable placeholder="Insert ticker" value={unitTicker} onChange={async (value) => {
      setUnitTicker(value)
    }}>
      <EditablePreview w={'100%'} />
      <EditableInput />
    </Editable>
    <Editable placeholder="Insert description" value={unitDescription} onChange={async (value) => {
      setUnitDescription(value)
    }}>
      <EditablePreview w={'100%'} />
      <EditableTextarea />
    </Editable>
    <Divider />
    <Editable placeholder="Insert avatar url" value={unitAvatar} onChange={async (value) => {
      setUnitAvatar(value);
      const newSrc = unitFile || value || "";
      setUnitSrc(newSrc);
    }}>
      <EditablePreview w={'100%'} />
      <EditableInput />
    </Editable>
    <Button colorScheme='teal' size='md' variant='outline' onClick={()=>{}}>
      Save
    </Button>
  </Box>
)}
