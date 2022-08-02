




import React from 'react'
import { Flex ,Image, Text, Spacer} from '@chakra-ui/react';

import {Link} from "react-router-dom"
import { useSelector } from 'react-redux';

function Navbar() {

   const cart = useSelector((state)=>state.cart.cart)

  return (

   <Flex background='teal' justifyContent='center' p={3}>
         <Image   borderRadius='full'boxSize='3rem'src='https://bit.ly/dan-abramov'alt='Dan Abramov' marginLeft={"1rem"}/>
      
         <Link to="/products"><Text color={"white"} px={2} py={2}>Products</Text></Link>
         <Spacer></Spacer>
         <Link to="/login"><Text color={"white"} px={2} py={2}>Login</Text></Link>
         <Link to="/signIn"><Text color={"white"} px={2} py={2}>Register</Text></Link>
       
         <Spacer></Spacer>
         <Link to="/cart"><Text color={"white"} px={2} py={2}>Cart</Text></Link>
         <Text color={"white"}>{cart?cart.length:0}</Text>
         <Spacer></Spacer>
   </Flex>
  )
}

export default Navbar