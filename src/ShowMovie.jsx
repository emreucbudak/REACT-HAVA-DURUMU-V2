import React from 'react'

function ShowMovie({ data }) {
    console.log(data)

    return (
        <div>
            <div className='showEcz'>
                <div className='pharmacyInformation'>
                    <img src={data.icon} alt="" className='logoecz' />
                    <h3>{data.date}</h3>
                    <h3>{data.day}</h3>
                    <h3>{data.description}</h3>
                </div>
                <div>
                    <h3>{Math.round(data.degree)} derece</h3>
                    <h5>Max : {Math.round(data.max)} derece</h5>
                    <h5>Min : {Math.round(data.min)} derece</h5>
                    <h5>Gece : {Math.round(data.night)} derece</h5>
                </div>
            </div>
        </div>
    )
}

export default ShowMovie