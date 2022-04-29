import { Flex, Box, Spacer, Text, Grid, HStack, Badge } from '@chakra-ui/react';
import React from 'react';
import MenuItem from '../Components/MenuItem';
import '../Routes/Menu.css';

export default function Crossroads() {
    return (
        <div class = "fullpage">
            <br></br><br></br>
        <div className='NAMEOFHALL'>Foothill</div>
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
                        <li>Scrambled Eggs</li>
                        <li>Tater Tots</li>
                        <li>Vegetable Medley</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>HOT MORNING GRAINS</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Oatmeal</li>
                        <li>White Rice</li>
                        <li>Brown Rice</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>BREAKFAST SPECIAL</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Assorted Mini Danishes</li>
                        <li>Assorted Croissant</li>
                        <li>Waffles</li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='meal'>
                <h3>LUNCH</h3>
                <div className='foodHeader'>
                    <h4>BIG C OMNI</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Chicken Wing Bar</li>
                        <li>Vegan Creole Potato Salad</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>Big C Plant Forward</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Vegan Chicken "Wing" Bar</li>
                        <li>Latin Style Coleslaw</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>DA NONNA</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Penne Pasta</li>
                        <li>Beef Bolognese Sauce</li>
                        <li>Garlic French Bread</li>
                        <li>Steamed Asparagus</li>
                    </ul>
                    </div>
                </div>
            </div><div className='meal'>
                <h3>DINNER</h3>
                <div className='foodHeader'>
                    <h4>BIG C OMNI</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Halal Beef Ropa Vieja</li>
                        <li>Seasoned Black Beans</li>
                        <li>Fried Plantains</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>BIG C PLANT FORWARD</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Vegan Chickenless Fajitas</li>
                    </ul>
                    </div>
                </div>
                <div className='foodHeader'>
                    <h4>GOLDEN GRILL</h4>
                    <div className='foodItem'>
                    <ul>
                        <li>Chicken Pesto Sandwich</li>
                        <li>Caprese Sandwich</li>
                        <li>Beef Cheeseburger</li>
                    </ul>
                    </div>
                </div>
            </div>
        
        </div>


        </div>
    )

}