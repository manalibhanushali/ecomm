import {addToCart, removeFromCart} from '../redux/action';
import {useDispatch, useSelector} from 'react-redux';
import  {productList} from '../redux/productAction';

function Main() {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.productData);
  console.warn("data in main componeent", data);
  const product = {
    name: 'i phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div>
      <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
      <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button>
      <button onClick={() => dispatch(productList())}>Product Data</button>
      <div className='product-container'>
      {
        data.map((item)=> <div className = 'product-item'>
          {/* <img src={item.photo} alt="pic" /> */}
          <div>Name : {item.name}</div>
          <div>Color : {item.color}</div>
          <div>Price : {item.price}</div>
          <div>Category : {item.category}</div>
          <div>Brand : {item.brand}</div>
          <div>
          <button onClick={() => dispatch(addToCart(product))}>Add to cart</button>
          <button onClick={() => dispatch(removeFromCart(product.name))}>Remove from cart</button>
      
            </div>
        </div>
        )
      }
      </div>
    </div>
  );
}

export default Main;
