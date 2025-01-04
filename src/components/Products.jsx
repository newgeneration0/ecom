import React from 'react'
import { useState } from 'react'
import { Button } from "@mui/material";
import { Link } from 'react-router-dom';
function Products (){
    const [result, setResult]=useState([])
    const url =`https://fakestoreapi.com/products/`
    fetch(url)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setResult(data)
      // console.log(data)
    })
    return(
        <>
            <div className="container">
        <div className="row">
          {
            result.map((alldata)=>(
                <div className="col-3">
                  <div className="card" style={{width: "18rem;"}}>
                  <Link to={`/singlepage/${alldata.id}`}>
                        <img src={alldata.image} style={{width:"200px"}} className="card-img-top mx-auto" alt="..."/>
                        </Link> 
                        <div className="card-body">
                            <h5 className="card-title">{alldata.title}</h5>
                            <p className="card-text">{alldata.description}</p>
                            <Button variant="outlined">Add To Cart</Button>
                        </div>
                  </div> 
                </div> 
            ))
        }
      </div>
    </div>
        </>
    )
}
export default Products;