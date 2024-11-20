import React from 'react'

const Contact = () => {
  return (
    <div id='contact' name='contact' className='w-full h-screen bg-[#0d1224] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bpjjzrmb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl text-white font-bold inline border-b-4 border-pink-600 '>Contact</p>
                <p className='text-[#e5e7eb] py-4'>shoot me an email</p>
            </div>
            <input className='bg-[#10172d] text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 p-2' type="text" placeholder='Name' name='name' required />
            <input className='bg-[#10172d] text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 my-4 p-2 ' type="email" placeholder='Email' name='email' required />
            <input className='bg-[#10172d] mb-4 text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 p-2' type="number" placeholder='Phone Number' name='Phone' />
            <textarea className='bg-[#10172d] text-white w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact