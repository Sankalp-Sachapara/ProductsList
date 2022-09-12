import React,{useState,useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import {AiOutlineSearch,AiOutlineCloseCircle} from "react-icons/ai"
import axios from 'axios'

function DataAndPageScroll() {

    const SCROLL_LIMIT = 10;
    const apiPath = "https://stageapibc.monkcommerce.app/admin/shop/product"

    const [products, setProducts] = useState([])
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
  
    // product fetching
    const getProductList = () => {
        
        let searchString = "";
        var PageNo = Math.ceil(products.length/ SCROLL_LIMIT ) + 1 ;
        const queryParam = "?search=" + searchString + "&page=" + PageNo
        const finalUrl = apiPath + queryParam
        
        
        axios.get(finalUrl)
        .then((res)=>{
            const apiResponse =res?.data
            const mergeData = [...products, ...apiResponse]
            setProducts(mergeData)
        }).catch((err)=>{
            console.error("error while loading products", err)
        })
        //end of product fetching

    }

    useEffect(() => {
      getProductList()
    
      
    }, [])

    const fetchMoreData = () =>{
        getProductList()
    }
    // Searchbar fn starts

    
    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = products.filter((value) => {
          return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
    
        if (searchWord === "") {
          setFilteredData([]);
        } else {
          setFilteredData(newFilter);
        }
      };
    
      const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
      }
    // Search bar fn end

    

  return (
    <div >
        {/* Search bar */}
        <div >
        <div className="flex justify-evenly">
        <input className="bg-white border rounded-sm rounded-r-sm text-lg p-4 h-8 w-[745px]"
          type="text"
          placeholder="Search"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="items-end p-2">
          {filteredData.length === 0 ? (
            <AiOutlineSearch /> 
          ) : (
            <AiOutlineCloseCircle id="clearBtn" onClick={clearInput} /> 
          )}
        </div>
      </div>
      </div>
      
      



        {/* Scroll */}
            <InfiniteScroll
                    dataLength={products.length }
                    next={fetchMoreData}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
            {products && products.length >0 && filteredData.length == 0 && products.map((key)=>{
                 return(
                <div>
                    <div className='flex '>
                        <input className=' m-5 mt-10 w-[20px] h-[20px] ' type="checkbox"/>
                        <img className='h-[75px] w-[75px] m-4' src={key?.image.src}/>
                        <h3 className='p-8 font-sans font-semibold'>{key?.title}</h3>
                    </div>
                    <div className=' px-8 border  border-x-0 py-2'>
                        {key?.variants.map((secondKey) => {
                            return(
                            
                                <div className='flex px-8 py-2 border  border-t-0 border-x-0 '>
                                    <input className=' m-5 mt-9  w-[20px] h-[20px] ' type="checkbox"/>
                                    <h3 className='p-8 flex-auto mr-[150px] font-sans font-semibold justify-center'>{secondKey?.title}</h3>
                                    <h3 className='p-8 flex-auto font-sans font-semibold '>{secondKey?.inventory_quantity} Available</h3>
                                    <h3 className='p-8 items-end font-sans font-semibold'>{secondKey?.price} Rs</h3>
                                </div>
                           

                                  )
                            })}
                    </div>
                </div>
                    )
                })}

                {products && products.length >0 && filteredData.length != 0 && (
                        <div className="dataResult">
                        {filteredData.slice(0, 10).map((value, key) => {
                           return(
                            <div>
                                <div className='flex'>
                                    <input className=' m-5 mt-10 w-[20px] h-[20px] ' type="checkbox"/>
                                    <img className='h-[75px] w-[75px] m-4' src={value?.image.src}/>
                                    <h3 className='p-8 font-sans font-semibold'>{value?.title}</h3>
                                </div>
                                <div className=' px-8 border  border-x-0 py-2'>
                                    {value?.variants.map((secondKey) => {
                                        return(
                                        
                                            <div className='flex px-8 py-2 border  border-t-0 border-x-0 '>
                                                <input className=' m-5 mt-9  w-[20px] h-[20px] ' type="checkbox"/>
                                                <h3 className='p-8 flex-auto mr-[150px] font-sans font-semibold justify-center'>{secondKey?.title}</h3>
                                                <h3 className='p-8 flex-auto font-sans font-semibold '>{secondKey?.inventory_quantity} Available</h3>
                                                <h3 className='p-8 items-end font-sans font-semibold'>{secondKey?.price} Rs</h3>
                                            </div>
                                       
            
                                              )
                                        })}
                                </div>
                            </div>
                                )
                        })}
                        </div>
                    )}

            </InfiniteScroll>


        
    </div>
  )
}

export default DataAndPageScroll
