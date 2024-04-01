import React, { useState } from 'react';
import GridLayout from 'react-grid-layout'
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import { Tabs, TabList, Tab, ListItem } from '@chakra-ui/react';
import {
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  useEditableControls,
  Input,
  ButtonGroup,
  Flex,
  IconButton,
} from '@chakra-ui/react';
import { Popover, PopoverTrigger, PopoverContent, Box, Button } from '@chakra-ui/react';
// import   CheckIcon, CloseIcon, EditIcon
import { CheckIcon, CloseIcon, EditIcon } from '@chakra-ui/icons';

const ExampleGrid = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleRightClick = (event: any) => {
    event.preventDefault(); // prevent the browser's context menu from showing up
    setPosition({ x: event.clientX, y: event.clientY });
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  // Define the layout configuration for each grid item
  const layoutConfig = [
    { i: 'item1', x: 0, y: 0, w: 2, h: 3 },
    { i: 'item2', x: 2, y: 0, w: 4, h: 3 },
    { i: 'item3', x: 6, y: 0, w: 2, h: 3 }
  ];

  // ...

  function EditableControls() {
    const {
      isEditing,
      getSubmitButtonProps,
      getCancelButtonProps,
      getEditButtonProps,
    } = useEditableControls()

    const submitButtonProps = getSubmitButtonProps();
    const cancelButtonProps = getCancelButtonProps();
    const editButtonProps = getEditButtonProps();

    return isEditing ? (
      <>
      </>
    ) : (
      <Flex justifyContent='center'>
        <IconButton size='sm' icon={<EditIcon />} aria-label={editButtonProps['aria-label'] || 'Edit'} {...editButtonProps} />
      </Flex>
    )
  }

  const dashboards = [
    {
      id: 0,
      name: 'BTC/USD',
    },
    {
      id: 1,
      name: 'LTC/BTC',
    },
    {
      id: 2,
      name: 'NANO/BTC',
    },
  ]
  return (
    <Box onContextMenu={handleRightClick}>
      <Popover isOpen={isOpen} onClose={handleClose}>
        <PopoverTrigger>
          <Box position="fixed" left={position.x} top={position.y} />
        </PopoverTrigger>
        <PopoverContent>
          <div>navigation</div>
        </PopoverContent>
      </Popover>
      <Tabs>
        <TabList>
          { dashboards.map(dashboard => (
            <Tab key={dashboard.id}>{dashboard.name}</Tab>
          ))}
          {/* <Tab>
            <Editable
              textAlign='center'
              defaultValue='BTC/USD'
              isPreviewFocusable={false}
              display={'flex'}
              flexDirection={'row'}
            >
              <EditablePreview />
              <Input as={EditableInput} />
              <EditableControls />
            </Editable>
          </Tab>
          <Tab>LTC/BTC</Tab>
          <Tab>NANO/BTC</Tab> */}
        </TabList>
      </Tabs>
      <GridLayout className="example-layout" layout={layoutConfig} cols={12} rowHeight={30} width={1200}>
        <div key="item1" style={{ background: '#ff4d4f' }}>Item 1</div>
        <div key="item2" style={{ background: '#40a9ff' }}>Item 2</div>
        <div key="item3" style={{ background: '#73d13d' }}>Item 3</div>
      </GridLayout>
    </Box>
  );
};

export default ExampleGrid;
