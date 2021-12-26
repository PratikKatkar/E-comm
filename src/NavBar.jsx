
import { Link } from "react-router-dom"
import "./NavBar.css"
const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-default ">
                <div className="container-fluid">
                 
                    <div className="navbar-header">
                        
                        <span className="navbar-brand" style={{color:"red"}} >E-commerce</span>
                    </div>

        
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav">
                           <li className="nav-item"><Link to ="/">Home</Link></li>
                           <li className="nav-item"><Link to ="login">Login</Link></li>
                           <li className="nav-item"><Link to ="/register">Register</Link></li>
                           <li className="nav-item"><Link to ="/categories">Categories</Link></li>
                           <li className="nav-item"><Link to ="/checkout">Checkout</Link></li>
                        </ul>


                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar

