import React from 'react'

function NavBar() {
  return (
    <div className='px-10 py-3 background-blur-2xl bg-black/40 w-full flex items-center justify-round'>
        <h1 className=' text-2xl font-bold text-white'>NavBar</h1>
        <button className='ml-auto bg-white text-black px-4 py-2 rounded-md'>Home</button>
        <button className='ml-4 bg-white text-black px-4 py-2 rounded-md'>Login</button>
        
    </div>
  )
}

export default NavBar