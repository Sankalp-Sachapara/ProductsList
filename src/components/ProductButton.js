import React from 'react'


function ProductButton(props) {
  return (

    <div  className=' flex flex-row-reverse m-4'>
    <button onClick={props.onClick} className=" w-[175px] m-4 mr-[150px] bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"> {props.text}</button>
    </div>

    
  )
}

export default ProductButton