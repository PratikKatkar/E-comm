import ProductList from './ProductList'
import { v4 as uuidv4 } from 'uuid';
import "./Checkout.css"

const Checkout = ({ cart }) => {

    let totalPrice = 0
    for (let i = 0; i < cart.length; i++) {
        totalPrice += cart[i].qty * cart[i].price
    }

    // let totalPrice = cart.reduce((acc, item) => {
    //     return acc + item.qty * item.price
    // }, 0)

    return (
        <div>
            {cart.map((item) => <div className="cart-item" key={uuidv4()} className="borderca">
              <span >
                  <img src={item.image} alt="" width="100px" height="100px" />
                  <h2>{item.title}</h2>
                  </span>  

                <h4>Description: {item.description}</h4>
                <h3>Price : {item.price}</h3>
                <h4 className="h-4">Qty: {item.qty}</h4>
            </div>)}
            <h1 className="bg">The total Price is {totalPrice}</h1>
        </div>
    )
}

export default Checkout 