import React from 'react'

import { useEffect, useState } from 'react'
import useWeather from "../hooks/useWeather"
import { Header, DisplayBoards, WeatherInfo } from "./"
export default function Container() {
    const { weather, error, getWeather, setError } = useWeather()
    const [city, setCity] = useState("")
    const [time, setTime] = useState("")
    const [date, setDate] = useState("")
    const onCLickHandler = (e) => {
        e.preventDefault()
        getWeather(city)
        setCity("")
        setError('')
    }
    useEffect(() => {
        getWeather("Thane")
        setInterval(() => {
            setTime(new Date().toLocaleString().slice(11, 24))
        })
        //  
        setDate(new Date().toLocaleString().slice(0, 9))

    }, [])
    return (
        <section className='w-screen max-w-screen-xl h-fit shadow rounded-xl border-2 border-blue-500 px-10 py-2'>
            <Header city={city} setCity={setCity} onclickHandler={onCLickHandler} error={error} />
            <DisplayBoards weather={weather} date={date} time={time} />
            <section className='w-full h-fit my-5 border-2 rounded-lg shadow-lg'>
                <WeatherInfo weather={weather} />
            </section>
        </section>

    )
}
