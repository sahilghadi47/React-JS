import React from 'react'
import { SearchIcon } from 'lucide-react'
export default function Header({
    onclickHandler,
    city,
    setCity,
    error
}) {
    return (

        <header className='md:flex justify-between items-center my-5' >
            <div>
                <h1 className='text-2xl font-semibold font-serif'>Weather App</h1>
            </div>
            <div className='mx-0 my-5 md:my-0 md:mx-5'>
                <form onSubmit={onclickHandler}
                    className='flex gap-2 items-center border rounded-lg bg-gray-50 px-2 py-1'

                >
                    <input type="text" className='bg-transparent outline-none' placeholder='Enter city Name' value={city} onChange={(e) => setCity(e.target.value)} />
                    <button type="submit" className='bg-transparent'><SearchIcon className='w-6 h-6' /></button>
                </form>
                {
                    error && <p className='text-red-500 text-md'>{error}</p>
                }
            </div>
        </header>
    )
}
