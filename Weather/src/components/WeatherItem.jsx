import React from 'react'

export default function WeatherItem({
    imgPath,
    wItem,
    imgAlt,
    name,
    icon
}) {
    return (
        <div className='flex gap-3 justify-between items-center border p-2.5 my-2'>
            <img src={imgPath} alt={imgAlt} className='w-8' />
            <h1>{name} : {wItem} {icon}</h1>
        </div>
    )
}
