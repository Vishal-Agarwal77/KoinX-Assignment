import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export default function InputBox() {
    const InputValue = useRef(null);
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`${InputValue.current.value}`);
    }
  return (
    <div className='my-10 p-5 flex flex-col gap-y-4 w-[200px] border-2 border-black rounded-lg mx-auto'>
        <p className='text-xl font-semibold'>Enter ID of Coin:</p>
        <input type='text' placeholder='Coin ID' ref={InputValue} className='border-2 px-2 py-1'/>
        <button onClick={handleClick} className='border-2 border-black w-fit px-2 py-1 rounded-md'>Submit</button>
    </div>
  )
}
