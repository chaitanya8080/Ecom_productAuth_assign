import React, { useEffect } from 'react';
import { getCurrentProductData } from '../Redux/products/action';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Products from '../components/Products';
import { Text, Flex, HStack, Box, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { addtoCart } from '../Redux/cart/action';

export const ProductDetails = () => {
  const data = useSelector((state) => state.product.currentProduct);
  const [size, setSize] = useState(null);

  const { _id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (_id) {
      dispatch(getCurrentProductData(_id));
    }
  }, [dispatch, _id]);

  const handleCart = () => {
    let payload = {
      ...data,
      size,
    };
    // console.log(payload)
    dispatch(addtoCart(payload));
  };

  return (
    <Flex justify="center" align="center">
      
      <div>
      <br></br>
        <Products product={data}></Products>
      </div>
      <Box>
        <Text w={300}>{data.description}</Text>
        <Text as="samp" fontSize="3xl">
          size
        </Text>{' '}
        <br></br>
        <HStack justify="center" align="center">
          {data?.size?.map((onesize) => (
            <button
              onClick={() => setSize(onesize)}
              key={onesize}
              style={{
                height: '3rem',
                width: '3rem',
                borderRadius: '50%',
                background: 'teal',
              }}
            >
              {onesize}
            </button>
          ))}
        </HStack>
        <br></br>
        <Button
          disabled={!size}
          onClick={handleCart}
          style={{
            background: 'transperant',
            height: '2.5rem',
            width: '10rem',
            borderRadius: '2rem',
            border: '2px solid silver',
          }}
        >
          Add to Cart
        </Button>
      </Box>
    </Flex>
  );
};
