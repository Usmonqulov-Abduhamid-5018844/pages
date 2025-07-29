import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import ErrorWidges from '../../components/ui/ErrorWidges';

const Recipes = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true);
    axios
      .get("https://dummyjson.com/recipes")
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoding(false));
  }, []);

  const navigate = useNavigate()

  if(error){
    return <ErrorWidges/>
   
  }
  return (
    <div className="container flex flex-wrap gap-y-7 gap-x-2 my-[100px] justify-between">
    {
      loding && <Loading/>
    }
    {data?.recipes?.map((item) => (
      <div className="border-1 shadow-lg border-amber-400 rounded-2xl p-[14px]" key={item.id}>
        <div className='w-[400px]'>
          <img onClick={()=> navigate(`/recipe/${item.id}`)} src={item.image} alt="" />
        </div>
        <div className='mt-[20px]'>
          <strong>{item.rating}</strong>
          <h1 className="line-clamp-1 font-bold" title={item.name}>
            {item.name}
          </h1>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Recipes
