import { useParams } from "react-router-dom"
import {useState, useEffect} from "react"
import ProductList from "./ProductList"

const CategoryList = ({user, setCart}) => {


    const params = useParams()

    const [product, setProduct] = useState([])

    useEffect(() =>{

        fetch(`https://fakestoreapi.com/products/category/${params.categoryName}`)
            .then(res=>res.json())
            .then(json=>setProduct(json))

    },[params.categoryName])
    

    return (
        <div>
           
           <ProductList products={product} user={user} setCart={setCart}></ProductList>
        </div>
    )  
}

export default CategoryList
