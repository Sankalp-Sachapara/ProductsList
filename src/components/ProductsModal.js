import React, {useState} from 'react';
import ReactModal from 'react-modal';

import { HiOutlinePencil} from 'react-icons/hi';
import DataAndPageScroll from './DataAndPageScroll';

ReactModal.setAppElement('#root')

function ProductsModal() {
    const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div>
        <button onClick={() => setModalIsOpen(true)}> <HiOutlinePencil size={20}  /></button>
        <ReactModal
         isOpen={modalIsOpen} 
         onRequestClose={() => setModalIsOpen(false)} 
         
         style={{overlay:{opacity: 50,position: 'fixed',top: 100,left: 500,right: 500,bottom: 100,}}}>
            
            <div className='flex border border-t-0 border-x-0 py-2  bg-white'>
                <h1 className=' text-3xl font-serif '> Select Product</h1>
                <button className='flex-row-reverse ml-[550px] font-bold text-xl' onClick={() => setModalIsOpen(false)}> X </button>
            </div>
            
            <div className='  mt-1 border border-t-0 border-x-0 py-2'>
                <DataAndPageScroll />
            </div>
            
        </ReactModal>
    </div>
  )
}

export default ProductsModal