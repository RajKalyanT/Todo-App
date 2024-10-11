import React, { useState } from 'react'
import axios from 'axios'
import './App.css'

function Create() {
    const [task,setTask]=useState()
    const handleAdd=()=>{
        axios.post('http://localhost:3001/add',{task:task})
        .then(result=>{
          location.reload()
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='flex items-center justify-between bg-[#edeef0] rounded-[30px] pl-5 mb-[25px]'>
        <input className='flex-1 border-none outline-none bg-transparent p-2' type="text" name="" id="" placeholder='Add task' onChange={(e)=>setTask(e.target.value)} />
        <button className='border-none outline-none px-[50px] py-4 bg-[#ff5945] text-white text-[16px] hover:cursor-pointer rounded-full' type='button' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Create