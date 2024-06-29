import React from 'react'
import WeatherItem from './WeatherItem'
export default function WeatherInfo({
    weather
}) {
    const items = [
        {
            imgPath: "/assets/images/sunrise.png",
            wItem: weather.sunrise,
            imgAlt: "sunrise",
            name: "Sunrise",
            icon: "AM"
        },
        {
            imgPath: "/assets/images/sunset.png",
            wItem: weather.sunset,
            imgAlt: "sunset",
            name: "Sunset",
            icon: "PM"
        },
        {
            imgPath: "/assets/images/humidity.png",
            wItem: weather.sunset,
            imgAlt: "humidity",
            name: "Humidity",
            icon: "%"
        }, {

            imgPath: "/assets/images/windspeed.png",
            wItem: weather.windSpeed,
            imgAlt: "wind speed",
            name: "Wind Speed",
            icon: "KM/Hr"
        },
    ]
    return (
        <aside className='w-fit p-3 rounded-lg  gap-x-3 grid md:grid-cols-4 grid-cols-1 mx-auto '>
            {
                items.map((item, index) => {
                    return <WeatherItem key={index} {...item} />
                })
            }
        </aside>
    )
}
