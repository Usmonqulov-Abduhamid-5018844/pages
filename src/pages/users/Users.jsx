import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../../components/ui/Loading';
import ErrorWidges from '../../components/ui/ErrorWidges';

const Users = () => {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    setLoding(true);
    axios
      .get("https://dummyjson.com/users")
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
    {data?.users?.map((item) => (
      <div className="border-1 shadow-lg border-amber-400 rounded-2xl p-[14px] flex flex-col" key={item.id}>
        <div className='w-[400px] items-center '>
          <img className='w-[100%]' onClick={()=> navigate(`/user/${item.id}`)} src={item.image} alt="" />
        </div>
        <div className='mt-[20px] flex flex-col'>
          <b className='text-[20px]'>{item.firstName}</b>
          <b className='text-[20px]'>{item.lastName}</b>
          <b className='text-[20px]'>{item.maidenName}</b>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Users
