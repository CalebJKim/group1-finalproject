import { Flex, Box, Spacer, Text, Grid, HStack, Badge } from '@chakra-ui/react';
import React from 'react';
import MenuItem from '../Components/MenuItem';
import '../Routes/Menu.css';

export default function Crossroads() {
    return (
        <div class = "fullpage">
            <br></br><br></br>
        <div className='NAMEOFHALL'>Clark Kerr</div>
        <br></br><br></br>
        <div class = 'sectiontitle'>Today's Featured Ratings: </div>
        <div class = "ratingsboxes">
        <Box>
          <Flex className='Menu'>
            <Box className='Food' marginBottom={3} margin={1}>
                <Box marginBottom={2}><Badge fontSize={30}><MenuItem /></Badge></Box>
            </Box>
            <Box className='Food' marginBottom={3} margin={1}>
                <Box marginBottom={2}><Badge fontSize={30}><MenuItem /></Badge></Box>
            </Box>
            <Box className='Food' marginBottom={3} margin={1}>
                <Box marginBottom={2}><Badge fontSize={30}><MenuItem /></Badge></Box>
            </Box>
          </Flex>
            
        </Box>
        </div>
        <div class = 'sectiontitle'>Today's Items: </div>
        <br></br>
        <div className='menucontainer'> 
            <div className='meal'>
                BREAKFAST
                <div className='foodHeader'>
                    <h4>BREAKFAST</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Chorizo Potato Scramble</li>
                        <li>Bacon</li>
                        <li>Vegetable Medley</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>PASTRIES</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Assorted Breakfast Pastries</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>ALLERGEN FRIENDLY</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Mung Bean Patties</li>
                        <li>Turkey Sausage</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='meal'>
                <h3>LUNCH</h3>
                <div className='foodHeader'>
                    <h4>BLUE PLATE</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>BBQ Pork SpareRibs</li>
                        <li>Barbeque Tofu</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>PASTAS</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Mushroom and Herb Cream Pasta</li>
                        <li>Garlic French Bread</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>SOUP AND SALAD</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Chicken Noodle Soup</li>
                        <li>Split Pea Soup</li>
                    </ul>
                    </div>
                </div>
            </div><div className='meal'>
                <h3>DINNER</h3>
                <div className='foodHeader'>
                    <h4>GRILL</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Hamburgers</li>
                        <li>Spicy Chicken Sandwich</li>
                        <li>Waffle Fries</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>BLUE PLATE</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Beef Bulgogi</li>
                        <li>Korean Fried Tofu</li>
                        <li>Kimchi Fried Rice</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>SOUP AND SALAD</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Chicken Noodle Soup</li>
                        <li>Split Pea Soup</li>
                    </ul>
                    </div>
                </div>
            </div>
        
        </div>


        </div>
    )

}