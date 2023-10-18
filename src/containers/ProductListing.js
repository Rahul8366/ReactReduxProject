import React, { useEffect } from 'react'
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../redux/actions/productActions'
import { useDispatch, useSelector } from 'react-redux';

const ProductListing = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch =useDispatch();
 const featchProduct = async () => {
  const response = await axios
  .get('https://fakestoreapi.com/products')
  .catch((err)=>{
    console.log('err',err);
  })
  dispatch(setProducts(response.data));
 }

 useEffect(() => {
  featchProduct();
 },[]);
 console.log("products: ", products);

  return (
 
      <div className='ui grid container ' style={{ marginTop: '20px'}}>
      {/* <h1 >productlistning</h1> */}
      <ProductComponent/>
    </div>
   
   
  )
}

export default ProductListing
