import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
 
// 1. cart page should contain all the cart items that are saved in cart context in the form of a table; ( you can display atleast product name and product price in first two cells of any row). the third cell contains remove from cart button clicking on which shall remove the item from the cart ( hint:  you need to dispatch remove from cart action and update your cart )

// 2. Below all the cart items list on table foot; there should be a Total in first cell of row and Total (Total price of all items in cart ) in second cell;

// 3. below the table; there should be a button called `Place Order` clicking on which will open an alert dialog box which asks `Are you sure you want to place this order ?` and two buttons Cancel and Yes; clicking on cancel will close the alert dialog; click on yes will dispatch checkout action which will empty all the cart items in cart context;
import { Box, Grid, GridItem, VStack,Image ,Text, Button} from "@chakra-ui/react";
function getData(){
  return axios.get(`https://fakestoreapi.com/products`)
}

const Cart = () => {

  const [data,setData] = useState("")

  useEffect(()=>{
    getData().then((res)=>{
       console.log(res.data)
       setData(res.data)
    })
  })
   
  return (
  
    <Grid
    templateColumns='repeat(4, 1fr)' gap={6}
    >
      {data && data.map((item)=>(
       <GridItem key={item.id}>
        <Box 
        columns={{sm:2, md:4}}
        spacing="8"
        p={2}
        textAlign="Center"
        >

          <VStack>
            <Box>
              <Image boxSize="xs"  src={item.image}/>
            </Box>
            <Box>
             <Text>{item.title}</Text>
            </Box>
            <Box>
            <Text>{item.price}</Text>
            </Box>
            
          </VStack>


        </Box>

       </GridItem>
      ))}
    </Grid>
  )
   
};

export default Cart;
