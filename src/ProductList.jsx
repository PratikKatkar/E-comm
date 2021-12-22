import Product from "./Product"
import { v4 as uuidv4 } from 'uuid';
import "./ProductList.css" 

function ProductList({products, setCart, user }) {

    console.log(user);
    return (
        <div className="product-list">
          
        {products.map((product) => <Product setCart={setCart} user={user} key={product.id} {...product}></Product>)}

        </div>
    )
}

export default ProductList
