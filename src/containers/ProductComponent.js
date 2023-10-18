import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  // console.log(JSON.stringify(products));
  const renderList = products && products.map((product) => {
    const { id, image, price, title, category   } = product;
return (
<div className='four column wide' key={id} style={{ marginTop: '20px', width: '250px'}} >
  <Link to={`/product/${id}`} >
     <div className='ui link cards'>
      <div className='card'>
       <div className='image'>
        <img src={image} alt={title} />
       </div>
       <div className='content'>
        <div className='header' style={{ fontSize: '1.2em', lineHeight: '1.2em', maxHeight: '2.4em', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical' }}> {title} </div>
        <div className='meta price' >$ {price} </div>
        <div className='meta ' > {category}  </div>
       </div>
      </div>
     </div>
     </Link>
    </div>
)
  })

  return  <>{ renderList  } </>

}

export default ProductComponent
