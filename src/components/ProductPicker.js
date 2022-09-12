import React from 'react'
import DiscountButton from './DiscountButton';

import ProductsModal from './ProductsModal';

function ProductPicker(props) {


  

  return (
    
    <div className="flex py-4 my-4 w-[630px]  rounded">
      
        <div className=" flex mx-8  mr-[10px] px-4  w-[355px] h-[65px]  bg-white border  border-solid rounded  items-center  drop-shadow-md">
            <input type="text" className="bg-white border-none outline-none rounded-sm rounded-r-sm text-lg p-4 h-8 w-[300px] " id="textS" placeholder={props.placeholder} />
            <ProductsModal />
        </div>
        

        {/* Discount Button */}
        
        <DiscountButton />
        
        {/* End */} 
        
        

    </div>
  )
}

export default ProductPicker