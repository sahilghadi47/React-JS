import React from 'react'
import useTicTacToe from '../hook/useTicTacToe'

export default function TicTacToe() {
    const { board, handleClick, handleReset, getMessage } = useTicTacToe()
    return (
        <div className='flex w-screen h-screen bg-gray-800 text-gray-50'>
            <div className='w-full max-w-screen-lg flex flex-col items-center p-5 m-10 mx-auto '>

                <div className='messgae-box border flex justify-around items-center w-[300px] p-5 my-5 font-semibold rounded-lg'>
                    <h1 className='text-2xl'>{getMessage()}</h1>
                    <button className='border rounded-lg px-3 py-2' onClick={() => handleReset()}>Reset</button>
                </div>
                <div className="board grid grid-cols-3 w-[300px] h-[300px] border rounded-lg ">
                    {board.map((b, index) => (
                        <button className='p-1 h-[80px] w-[80px] text-2xl rounded-lg  justify-self-center self-center bg-gray-300/75 hover:bg-gray-300 disabled:bg-gray-300 text-black/80' key={index} index={index}
                            onClick={() => handleClick(index)}
                            disabled={b !== null}
                        >
                            {b}
                        </button>
                    ))}
                </div>
            </div>
        </div>

    )
}
