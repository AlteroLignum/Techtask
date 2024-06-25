
import React, { useEffect, useState } from 'react'
import Header from '@/app/components/Homepage/Header'
import ListComponent from '@/app/components/Homepage/ListComponent'



const CardPage = ({params}:{params:{id:string}}) => {
    

  return (
    <>

        <Header></Header>
        
        {/* {loading ? <div style={{ width: '100%', height: '500px', backgroundColor: 'grey' }}></div> : 
        
            } */}
        <ListComponent id={params.id}></ListComponent>
        
    </>
  )
}  

export default CardPage