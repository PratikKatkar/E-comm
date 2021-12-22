
import "./Product.css"
import { Link } from "react-router-dom"


const Product = ({ user, setCart, ...props }) => {

    const handleClick = () =>{

        if(user === null){
            alert("Please Register & Login")
        }
        else{
            setCart(cart =>{
                
                let asn = cart.filter((item) => item.id === props.id)

                if(asn.length === 1){


                    let newCart= cart.map((item) => {
                        
                        if(item.id === props.id){
                            let newItem={...item}
                            newItem.qty += 1
                            return newItem
                        }
                        return item
                    })
                    return newCart
                }
                else{

                    let newCart = [...cart, {...props, qty: 1}]
                    return newCart
                }
            })
        }

    }



    return (
        <div className="extra-div" style={{ width: "400px", height: "400px" }}>
            <Link style={{ textDecoration: 'none' }} to={`/product/${props.id}`}>
                <img src={props.image} width="150px" height="150px" alt=" img not found" />
                <h4>{props.title}</h4>
                <p>{props.category}</p>
                <p>Rs:{props.price}</p>
            </Link>
            {/* <button className="btn btn-success " >Buy</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
            <button onClick={handleClick} className="btn btn-primary " >Add to cart</button>
        </div>
    )
}

export default Product
