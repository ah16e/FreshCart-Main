import React from 'react'

export default function RecentCategoris({categorys}) {
  return <>
  
    <div className="mx-auto py-6 gap-6">
    <img src={categorys.image} className='h-[300px]' alt="" />
    <h2>{categorys.name}</h2>
   
    </div>
  
  
  </>
}
