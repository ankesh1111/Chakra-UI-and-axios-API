import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"
import { Box, Grid, GridItem, VStack,Image ,Text, Button} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// 0. axios should be used for making network requests;

// 1. API request should be made to `https://fakestoreapi.com/products` on mount and get the data and the same data should be displayed in the form of cards ( 3 per row in large screens, 2 per row  in medium screens and 1 per row  in small screen  )

// 2. loading, error and data state should be maintained; show proper loading indicator and error state when required;

// 3. each product card should atleast contain product image, title , price and a add to cart button;

// 4. cart data is maintained in the cart context and based on the cart data if the product is already added to the cart, then the add to cart button should be disabled for that particular product;

// 5. clicking on add to cart button will add the product to the cart; this cart is maintained in the cart context; as useReducer has been used for state management in cart context; you need to dispatch some add_to_cart action to add new product to the cart.

function getData(){
  return axios.get(`https://fakestoreapi.com/products`)
}

const Home = () => {


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
            <Box>
             <Button color="white" bgColor="teal"> <Link to="/cart"> Add to Cart</Link> </Button>
            </Box>
          </VStack>


        </Box>

       </GridItem>
      ))}
    </Grid>
  )
};

export default Home;
