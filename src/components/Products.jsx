

import React from 'react'
import { Box , Image, Text} from '@chakra-ui/react';
import {useNavigate} from "react-router-dom"
export const Products=({ product})=> {

    const navigate = useNavigate();
    const {_id, title, image, price} = product;
  return (
    <Box onClick={()=>navigate(`/products/${_id}`)} >
        <Image src={image} h={350}></Image>
        <Text >{title}</Text>
        <Text>{price}</Text>
    </Box>
  )
}

export default Products