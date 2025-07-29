import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorWidges from "../../components/ui/ErrorWidges";
import Loading from "../../components/ui/Loading";

const Product = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);


  useEffect(()=> {
    axios
    .get(`https://dummyjson.com/products/${id}`)
    .then(res => setData(res.data))
    .catch(err => setError(err))
    .finally()
  },[])

  const navigate = useNavigate()

  if(error){
    return <ErrorWidges/>
  
  }

  return <div className="container flex items-center mt-[100px] ">

    <div>
      <img src={data?.images[0]} className="w-[500px]" alt="" />
      <div className="flex">
    {
      data?.images?.map((url, index)=> (
        <img className="w-[150px]" src={url} key={index} alt="" />
      ))
    }

      </div>
    </div>
    <div className="flex flex-col gap-[20px] w-[50%]">
      <h1 className="text-2xl font-bold">{data?.title}</h1>
      <strong className="text-[20px]">{data?.price} USD</strong>
      <p className="text-[20px]">{data?.description}</p>
      <button onClick={()=> navigate(-1)} className="bg-blue-600 py-[6px] text-white font-bold rounded-[8px] mt-[40px]"> Go Back</button>
    </div>
  </div>;
};

export default Product;
