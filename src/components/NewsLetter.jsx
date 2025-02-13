

import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full bg-gradient-to-b from-green-300 to-red-300 p-5 min-h-[250px]'>
        
        <section className='border flex justify-center  text-center flex-col items-center mx-auto space-y-5'>

            <div className='mt-10' >
                <h2>Subcribe now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse, accusantium reprehenderit aut at ipsa iusto laborum cumque? Consequuntur, officia veniam.</p>
            </div>
            {/* email */}
            <div className='flex gap-2'>
                <input type='email' required className='px-32  py-3 rounded'/>
                <button className='px-10 py-3 border bg-black text-white md:text-xl'>Send</button>
            </div>

        </section>
        {/* test */}



    </div>
  )
}

export default NewsLetter