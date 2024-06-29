import React from 'react'

export default function DisplayBoard(
    {
        weather,
        time,
        date
    }
) {
    const weatherConditions = [
        {
            condition: "Thunderstorm",
            path: "public/assets/images/thunderstrom.png"
        },
        {
            condition: "Drizzle",
            path: "public/assets/images/drizzle.png"
        },
        {
            condition: "Rain",
            path: "/assets/images/rain.png"
        },
        {
            condition: "Snow",
            path: "/assets/images/snow.png"
        },
        {
            condition: "Clear",
            path: "/assets/images/clear.png"
        },
        {
            condition: "Clouds",
            path: "/assets/images/clouds.png"
        },
        {
            condition: "Mist",
            path: "/assets/images/mist.png"
        },
        {
            condition: "Smoke",
            path: "/assets/images/smoke.png"
        },
        {
            condition: "Haze",
            path: "/assets/images/haze.png"
        },
        {
            condition: "Dust",
            path: "/assets/images/dust.png"
        },

    ]
    return (
        <section
            className='w-full h-[300px] shadow-xl rounded-xl bg-gradient-to-bl font-serif from-violet-500  to-purple-500 flex items-center py-5'
        >
            {weather &&
                <div className='text-gray-800 w-full h-full px-10 flex justify-center items-center flex-col'>
                    <div className='pb-2 w-full pl-3'>
                        {/* <p className='text-xl'>{weather.weatherType }</p> */}
                        {
                            weatherConditions.map((item) => {
                                if (item.condition === weather.weatherType) {
                                    return <img src={item.path} alt={item.condition} className='w-10 h-10 mb-3' />
                                }
                            })
                        }
                        <p className='text-sm '>{weather.description}</p>
                        <p className='text-7xl '>{Math.round(weather.temp)}
                            <span className='text-2xl'> °C </span>
                        </p>
                        <h1 className='text-lg pt-2'>{weather.name} ( {weather.country} )</h1>
                    </div>
                    <div className='w-full text-right text-xl font-bold  pr-3'>
                        {
                            time
                        }
                        <br />
                        {
                            date
                        }
                    </div>
                </div>}
        </section>
    )
}
