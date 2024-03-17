import React from 'react'
import axios from "axios";
import { useEffect,useState } from 'react';
import { useDispatch} from 'react-redux';
import { addtoCart } from '../store/cartSlice';

function Products() {
    const [products, setProducts] = useState([]);
    const dispatch =useDispatch();
    const handleAdd=(product)=>{
        dispatch(addtoCart(product))


    }
    useEffect(() => {
     const fetchProducts = async () => {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log(res.data);
      setProducts(res.data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="productsWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>{product.price}</h5>
          <button onClick={()=>handleAdd(product)} className="btn">
            Add to cart
          </button>
        </div>
      ))}
    </div>
  )
}

export default Products