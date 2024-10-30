import React from 'react'

function TokenLaunchpad() {
    function clickHandler(){

    }
    return (
        <div className='flex flex-col items-center justify-center gap-5'>
            <h1>Token Launchpad</h1>
            <input type="text" className='h-16 w-96 p-2 bg-slate-500 rounded-lg' placeholder='input' />
            <input type="text" className='h-16 w-96 p-2 bg-slate-500 rounded-lg' placeholder='input'  />
            <input type="text" className='h-16 w-96 p-2 bg-slate-500 rounded-lg' placeholder='input'  />
            <input type="text" className='h-16 w-96 p-2 bg-slate-500 rounded-lg' placeholder='input'  />
            <button onClick={clickHandler} className='bg-purple-500 p-3 text-white rounded-lg'>Create a Token</button>
        </div>
    )
}

export default TokenLaunchpad

