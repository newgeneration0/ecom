import React from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@mui/material'
export default function SinglePage() {
    const [result, setResult]=useState([])
    const params = useParams()
    console.log(params)
    const url =`https://fakestoreapi.com/products/${params.id}`
    fetch(url)
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setResult(data)
      // console.log(data)
    })
  return (
    <>
    {/* <div>{result.id}</div>
    <h1>{result.title}</h1> */}
    <div className="card mb-3" style={{width: "500px;"}}>
    <div class="row g-0">
    <div class="col-md-4">
      <img src={result.image} className="img-fluid rounded-start w-75" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fs-2">{result.title}e</h5>
        <p className="card-text fs-5">{result.description}</p>
        <Button variant='outlined'>Add to Cart</Button>
      </div>
    </div>
  </div>
</div>

    </>

  )
}
