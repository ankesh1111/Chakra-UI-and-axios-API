import React from "react";
import {Container, Flex, Stack,Button, ButtonGroup,Box,Spacer, Heading} from "@chakra-ui/react"
import { Link } from "react-router-dom";

// 1. Navbar should be responsive
// 2. On the left hand side; If the user has logged in; Token should be displated; else Token shouldn't be shown.
// 3. on the right hand side; There will be there different links. `HOME` `LOGIN` `CART`

const Navbar = () => {
  return  (
  
    <Flex marginTop="20px" minWidth='max-content' alignItems='center' gap='2'>
       <br/>
    <Box p='2'>
      <Heading size='md'>Token</Heading>
    </Box>
    <Spacer />
    <ButtonGroup gap='2'>
      <Button colorScheme='teal'>  <Link to="/">Home</Link></Button>
      <Button colorScheme='teal'> <Link to="/login">Login</Link></Button>
      <Button colorScheme='teal'>    <Link to="/cart">Cart</Link></Button>
    </ButtonGroup>
  </Flex>
       
      
     

 


  )
};

export default Navbar;
