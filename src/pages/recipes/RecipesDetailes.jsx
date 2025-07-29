import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ErrorWidges from "../../components/ui/ErrorWidges";
import Loading from "../../components/ui/Loading";

const RecipesDetailes = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  const [error, setError] = useState(null);

  useEffect(()=> {
    axios
    .get(`https://dummyjson.com/recipes/${id}`)
    .then(res => setData(res.data))
    .catch(err => setError(err))
    .finally()
  },[])

  const navigate = useNavigate()

  if(error){
    return <ErrorWidges/>
  
  }

  return <div className="container flex items-center mt-[100px] gap-[30px] ">
    <div>
      <img src={data?.image} className="w-[500px]" alt="" />
      <div className="flex">
    {
      data?.images?.map((url, index)=> (
        <img className="w-[150px]" src={url} key={index} alt="" />
      ))
    }

      </div>
    </div>
    <div className="flex flex-col gap-[20px] w-[50%] text-center">
      <h1 className="text-2xl font-bold">{data?.name}</h1>
      <strong className="text-[20px]">{data?.rating} </strong>
      <button onClick={()=> navigate(-1)} className="bg-blue-600 py-[6px] text-white font-bold rounded-[8px] mt-[40px]"> Go Back</button>
    </div>
  </div>;
};

export default RecipesDetailes;
