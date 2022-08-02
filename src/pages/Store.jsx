

import React from 'react'
import { useEffect } from 'react'

import { getData} from "../Redux/products/action";
import {Products} from "../components/Products"
import { useDispatch } from 'react-redux';
import { Text, Grid } from '@chakra-ui/react'
import { Filter } from '../components/Filter';
import { useSelector } from 'react-redux';


export const Store= () =>{

const dispatch = useDispatch()

const products = useSelector((state)=>state.product.products)
const error = useSelector((state)=>state.product.error)


  useEffect(()=>{

    if(products?.length===0){
      dispatch(getData())
    }

  },[dispatch, products.length])

  
  return (
    <div >
      <Text>Shop All</Text>
      <Filter></Filter>

      {
       
        error? <p key={products.id}>Please Try Again Later</p> :
       <Grid templateColumns='repeat(4, 1fr)' gap={1} justify='center' align='center'> 
        {products.length>0 && products.map((product)=>{
              return  <div key={product.id} >
                <Products  product={product}/>
              </div>
                })}

      </Grid>

      }
      
    </div>
  )
}

