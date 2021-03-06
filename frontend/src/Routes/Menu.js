import { Flex, Box, Spacer, Text, Grid, HStack, Badge } from '@chakra-ui/react';
import React, { useState } from 'react';
import MenuItem from '../Components/MenuItem';
import '../Routes/Menu.css';

export default function Menu() {

    return (
        <div>
            <h1>Dining hall yay :D</h1>
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