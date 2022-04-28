import { Flex, Box, Spacer, Text, Grid, HStack, Badge } from '@chakra-ui/react';
import React from 'react';
import MenuItem from '../Components/MenuItem';
import '../Routes/Menu.css';

export default function Foothill() {
    return (
        <div>
            <h1 className='header1'>Foothill</h1>
        <Box>
          <Flex className='Menu'>
            <Box className='Food' marginBottom={3} margin={1}>
                <Box marginBottom={2}><Badge fontSize={30}><MenuItem /></Badge>
                </Box>
                </Box>
                <Box className='Food' marginBottom={3} margin={1}>
                <Box marginBottom={2}><Badge fontSize={30}><MenuItem /></Badge>
                </Box>
                </Box>
                </Flex>
                </Box>
                </div>
    )

}