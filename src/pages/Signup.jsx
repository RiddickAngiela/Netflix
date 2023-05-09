import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-screen'> 
        <img className='hidden sm:block absolute w-full object-cover' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt='/' />
        <div className='bg-black/80 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input className='p-3 my-2 bg-grey-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                        <input className='p-3 my-2 bg-grey-700 rounded' type='password' placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup