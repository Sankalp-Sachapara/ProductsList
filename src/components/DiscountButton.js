import React,{useState} from 'react'

function DiscountButton() {

    const [isDiscount, setisDiscount] = useState(true)

  return (
  <div>
    {isDiscount ? 
        <div >
            <button onClick={() => setisDiscount(false)} className="w-[160px] h-[65px] mx-3  bg-gray-500 hover:bg-white text-white font-semibold hover:text-gray-700 py-2 px-4 border border-gray-700 hover:border-gray-500 rounded drop-shadow-md"> Discount</button>
        </div> :
        <div className=" flex ">
            <div  className='  mb-2 mx-3 px-4 py-3  w-[70px] h-[65px]  bg-white border  border-solid rounded  items-center drop-shadow-md ' >
                <input type="text" className="bg-white border-none outline-none text-lg  h-8 w-[50px] " id="textS"  /> 
            </div>
            <div  className='  mb-2 mx-3 px-4 py-3  w-[105px] h-[65px]  bg-white border  border-solid rounded  items-center drop-shadow-md' >
            <select className="bg-white border-none outline-none text-lg  h-8 w-[85px] "><option value="off">% off</option><option value="Flat">Flat off</option></select>
            </div>
        </div>
    } 
    
        
        
    </div>
  )
}

export default DiscountButton