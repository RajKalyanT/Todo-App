import React, {useEffect, useState} from 'react'
import {BsCircleFill, BsFillTrashFill,BsFillCheckCircleFill} from 'react-icons/bs'
import axios from 'axios'
import Create from './Create'
import './App.css'

function Home() {
    const [todos, setTodos] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:3001/get')
        .then(result=>setTodos(result.data))
        .catch(err=>console.log(err))
    },[])

    const handleEdit=(id)=>{
        axios.put('http://localhost:3001/update/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }

    const handleDelete=(id)=>{
        axios.delete('http://localhost:3001/delete/'+id)
        .then(result=>{
            location.reload()
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className="w-full max-w-[540px] bg-white my-[100px] mx-auto mb-5 p-[40px_30px_30px] rounded-[10px]">
        <h1 className="text-[#002765] flex items-center mb-5 gap-2 font-bold text-2xl">Todo List</h1>
        <Create />
        {
            todos.length===0
            ?
            <div className='flex justify-center pl-5 mb-5 py-2 text-xl'><h2>No Records</h2></div>
            :
            todos.map(todo=>(
                <div className='flex flex-row items-center pl-5 mb-5 py-2 w-full justify-between text-xl'>
                    <div className='flex flex-row gap-2 items-center hover:cursor-pointer' onClick={()=>handleEdit(todo._id)}>
                        {todo.completed?
                        <BsFillCheckCircleFill className='text-[#ff5945]' />
                        :
                        <BsCircleFill className='text-[#ff5945]' />
                        }
                        <p className={`${todo.completed ? 'line-through' : ''}`}>{todo.task}</p>
                    </div>
                    <div>
                        <p className='m-[0px_5px_0px_4px_] hover:cursor-pointer' onClick={()=>handleDelete(todo._id)}><BsFillTrashFill /></p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Home