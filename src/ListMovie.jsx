import React, { useState } from 'react'
import ShowMovie from './ShowMovie'

function ListMovie({pharmacy}) {
    const a = pharmacy
    
    
    return (
        <div>
            <div className='listp'>
                {
                     a.map((data,index) => {
                         return <ShowMovie data = {data}  key={index} />
                     })
                }

            </div>
        </div>
    )
}

export default ListMovie