import React,{useState} from 'react'
import ProductButton from './ProductButton'
import ProductPicker from './ProductPicker'

function ProductList() {

    const [components, setComponents] = useState(["Search Product"]);

    const handleAdd = () => {
        setComponents([...components, "Search Product"]) 
      };

    const handleRemove = (index) => {
        const list = [...components];
        list.splice(index, 1);
        setComponents(list);
        console.log(index)
      };
  
    return ( 
    <div className=' mx-[550px] my-7 p-6' >
        <h1 className='font-serif text-3xl mb-6'>Add Products</h1>
        <div className=' flex  text-left'>
            <p className='text-xl w-auto m-4 mr-[250px]'>Products</p>
            <p className='text-xl pl-10 w-auto m-4 mr-[250px] text-right'>Discount</p>
        </div>
        {components.map((item,index)=>(
        <div key={index} className='flex'>
            <ProductPicker placeholder={item} />
            {components.length !== 1 && (
            <button className='flex-row-reverse font-mono text-xl' onClick={() => handleRemove(index)}> X </button>
            )}
            </div>
        ))}
        
        <ProductButton onClick={handleAdd} text="Add Product"/>
        
    </div>
  )
}

export default ProductList