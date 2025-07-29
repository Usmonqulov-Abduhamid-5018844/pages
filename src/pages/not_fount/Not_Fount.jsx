import React from 'react'
import { useNavigate } from 'react-router-dom'

const Not_Fount = () => {
    const navigate = useNavigate()
  return (
    <div className='container'>
        <div className='mx-auto font-bold flex flex-col  text-red-600 items-center mt-[40px] text-[60px]'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/008/255/803/small_2x/page-not-found-error-404-system-updates-uploading-computing-operation-installation-programs-system-maintenance-a-hand-drawn-layout-template-of-a-broken-robot-illustration-vector.jpg" alt="" />
            <button onClick={()=> navigate(-1)} className='text-white bg-blue-700 text-[25px] px-[20px] py-[8px] rounded-2xl'>Go Back</button>
        </div>
    </div>
  )
}

export default Not_Fount
