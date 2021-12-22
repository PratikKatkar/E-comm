import { useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import "./Detail.css"

function detailJsx(detail){

  const Jsx =(
      <div className="detail">
          <img src={detail.image} alt=""  width="300px" height="300"/>
          <h1>{detail.title}</h1>
          <h2>{detail.description}</h2>
          <h2>{detail.price}</h2>
          <h2>{detail.category}</h2>
          <h2>Rate:{detail.rating.rate}</h2>
          <h2>Count:{detail.rating.count}</h2>


      </div>
  )
  return Jsx;
}

const Detail = (props) => {






    const [detail, setDetail]= useState(null);

    useEffect(() => {
       

        fetch(`https://fakestoreapi.com/products/${params.id}`)
        .then(res => res.json())
        .then(json => setDetail(json))

    },[params.id])
   

    const params = useParams()
    
    return (
        <div>
            {detail===null ? <p>Data is loading...</p> : detailJsx(detail) }
        </div>
    )
}

export default Detail
