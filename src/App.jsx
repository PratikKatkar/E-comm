import app from "./firebase"
import SignIn from "./SignIn"
import SignUp from "./SignUp"
import{useState, useEffect} from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar"
import ProductList from "./ProductList"
import Detail from "./Detail"
import Category from "./Category"
import CategoryList from "./CategoryList"
import Checkout from "./Checkout"


const App = () => {

    const [user, setUser] = useState(null);
    const [product, setProduct] = useState([])
    const [cart, setCart] = useState([])

     useEffect(() => {
       
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=> setProduct(json))
            .catch(err => alert(err))
        

    }, [ 'alert'])


   
    return (
     
        <>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<ProductList user={user} setCart={setCart}products={product}></ProductList>}></Route>
            <Route path="/login" element={<SignIn setUser={setUser}></SignIn>}></Route>
            <Route path="/register" element={<SignUp></SignUp>}></Route>
            <Route path="/product/:id" element={<Detail></Detail>}></Route>
            <Route path="/categories" element={<Category></Category>}></Route>
            <Route path="/categories/:categoryName" element={<CategoryList user={user} setCart={setCart}></CategoryList>}></Route>
            <Route path="/checkout" element={<Checkout cart={cart}></Checkout>} ></Route>
    
            

        </Routes>
       </>
    )
}

export default App
