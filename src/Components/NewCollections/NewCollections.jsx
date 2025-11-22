import React from 'react'
import new_collection from "../Assets/new_collections"
import Dump from '../Item/dump'
function NewCollections() {
  return (
    <div className="flex flex-col" >
      <h1 className="font-bold justify-center items-center flex text-4xl mt-10 mb-10 ">NEW COLLECTIONS</h1>
      <hr className=""/>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-5 mt-5 mb-10 gap-10 ml-15 mr-15 " >
        {
            new_collection.map((item,index)=>(
                 <Dump key={index} {...item}/>
            ))
        }
      </div>
    </div>
  )
}

export default NewCollections
