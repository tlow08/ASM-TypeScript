// import React from 'react'

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { IProduct } from "../interface/products";
type Props = {};
const Detail = (props: Props) => {
  const [product, setProduct] = useState<IProduct>({} as IProduct);

  const param = useParams();
  console.log(param);

  useEffect(()=>{
    fetch(`http://localhost:3000/products/${param?.id}`)
    .then(res=>res.json())
    .then((data:IProduct)=>{
        setProduct(data)
    }).catch(error=>console.log(error))
  },[]);
  return (
    <>
      <p>Detail </p>
      <div>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <img src={product.image} alt="" />
      </div>
    </>
  )
}

export default Detail
