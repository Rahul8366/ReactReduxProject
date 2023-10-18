import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedproduct, selectproduct } from '../redux/actions/productActions';

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { description, image, price, title, category   } = product;
  console.log(product);
  console.log(image);
  console.log(title);
  console.log(category);

  const { ProductID } = useParams();
  const dispatch=useDispatch();
  // console.log(ProductID);

 
  
   const featchProductDetails = async () =>   {

    const response = await axios
    .get(`https://fakestoreapi.com/products/${ProductID}`)
    .catch((err)=>{
      console.log("Err",err)
    });
    dispatch(selectproduct(response.data));
   }

   useEffect(()=>{
      if(ProductID && ProductID!== '') featchProductDetails();

      return () => {
        dispatch(removeSelectedproduct());
      }

   },[ProductID])


  return (
    <div className="ui grid container" style={{ marginTop: '20px'}} >
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment"  >
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={ image }  />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a className="ui teal tag label">${price}</a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
