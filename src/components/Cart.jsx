


import { Box, Button, Flex, Grid,Image,Spacer,Text} from '@chakra-ui/react';
import React from 'react'

import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux';
import { decreaseQty ,increaseQty, removeFromCart} from '../Redux/cart/action';



export const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) =>state.cart.cart);

  const handleIncrease = (id,size)=>{
    dispatch(increaseQty({id,size}))
  }
  const handleDecrease = (id,size,qty)=>{
    if(qty>1){
         dispatch(decreaseQty({id,size}))
    }
    else{
       dispatch(removeFromCart({id,size}))
    }
  }

  const handleRemoveProduct =(id,size)=>{
    dispatch(removeFromCart({id,size}))
  }

  let total_price = 0;

  cart.forEach((prod)=>{
    total_price += prod.price *prod.qty
  })

  console.log(cart);
  return (
    <Box  style={{width:"60%"}} >
      <Flex >
        <Box style={{height:"30%" , width:"80%" , justifyContent:'center'}} >

         <Grid templateColumns='repeat(1, 1fr)' gap={1} justify='left' align='left' ml="10rem"> 
        {cart.length>0 && cart.map((product)=>{
              return <Flex key={product.id}>
                
              <div key={product.id} >
              <Box  mr="2rem">
              <Image src={product.image} h={250}></Image>
              </Box >

              </div>
              <Box gap={2}>
              <Text >{product.title}</Text>
             <Text>Rs : {product.price}</Text> <br />
             <Box>
             <Button border='2px solid gray' height="2rem" disabled={product.qty===0} onClick={()=>handleDecrease(product.id,product.size, product.qty)}> - </Button>
             <Button height="2rem">{product.qty}</Button>
             <Button border='2px solid gray' height="2rem" onClick={()=>handleIncrease(product.id,product.size)}> + </Button>
             </Box> <br /> <br />


              <Button  
               onClick={()=>handleRemoveProduct(product.id,product.size)}
                style={{
              background: 'transperant',
              height: '2.5rem',
              width: '10rem',
              borderRadius: '2rem',
              border: '2px solid silver',
               }}
               >
               Remove
             </Button>
              </Box>

            
              </Flex> 

              
                })}


      
        

      </Grid>
        </Box>
         <Spacer></Spacer>

        <Box justifyContent="left" >
            <Text      marginTop="30%" textAlign="left">TOTAL :  Rs {total_price}</Text>

            <Button  
              
              style={{
            background: 'black',
            color:"white",
            marginTop:"30%",
            marginRight:"5%",
            height: '2.5rem',
            width: '12rem',
            borderRadius: '2rem',
            border: '2px solid black',
            
             }}
             >
             Checkout
            </Button>
           
           </Box>
        </Flex>
    </Box>

  )
}
