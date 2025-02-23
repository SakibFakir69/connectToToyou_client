


import React from 'react'
import { motion } from "motion/react"



function AboutNow() {
  return (
    <article className='w-full flex flex-col justify-center items-center'>

      <section className=' p-4'>
        {/* 2 */}
        
        <section className='w-full border flex gap-4 flex-col'>

        <motion.div className='p-4 border bg-red-400'
        initial={{x:-350,opacity:0,}}
        whileInView={{x:0,opacity:1,y:0}}
        transition={{duration:0.5, delay:0.2,ease:"easeInOut" }}
        translate={{}}
        >
          <h2 className='md:text-2xl font-semibold'>Why Our Platform</h2>
          {/* use icon  */}
          <div>
            <p> we provide a seamless and engaging space for users to share their thoughts and ideas effortlessly.</p>

            <span>✅Accessible Anytime, Anywhere – Share and engage with messages from any device, at any time.</span>
            <span>Creative & Interactive – Add a title, message, and description to make your words stand out</span>

            <span>User can post short message</span>


          </div>



        </motion.div>

        {/* 2 */}

        <motion.div className='bg-stone-200 p-4'

        initial={{x:550,opacity:0}}
        whileInView={{x:0,opacity:1}}
        transition={{duration:0.9, delay:0.3, ease:"easeInOut"}}
        
        
        >
         
         <div>
          <h2>Why Join Our Community?</h2>
          <p>We don’t just provide a space for messages—we create an experience where ideas thrive. [Your Platform Name] is built for those who want to make an impact.</p>
         </div>

          <div>
            <p>🛠 Innovative & Dynamic – A fresh take on social interaction through short, meaningful messages.</p>
            <p>💡 Express Yourself Freely – Share your thoughts, ideas, and messages in a meaningful way</p>
            <p>🌍 A Place to Connect – Engage with like-minded individuals and discover new perspectives.</p>

          </div>

        </motion.div>

        </section>

        {/* 4 */}

        <section className=' border flex flex-col gap-4 mt-6'>
          
        <motion.div className='bg-yellow-200 p-4'

        initial={{x:-350}}
        whileInView={{x:0}}
        transition={{duration:0.9, delay:0.3, ease:"easeInOut"}}
        
        >
          <div>
            <h2>Your Voice, Your Space</h2>

            <p>At [Your Platform Name], we believe that every voice matters. Whether you want to share a thought, express an idea, or connect with others, this is your space to be heard.</p>
             </div>

          <div>
            <p>🗣 Speak Freely – Share your thoughts in a way that feels right for you.</p>
            <p>Your simple text louder then your voice</p>
            
          </div>
        </motion.div>

        {/* 4 */}

        <motion.div className='bg-green-300 p-4'


initial={{x:550,opacity:0}}
whileInView={{x:0,opacity:1}}
transition={{duration:0.9, delay:0.3, ease:"easeInOut"}}



        
        >
          <div>
            <h2>Our Aim & Mission</h2>
            <p>At [Your Platform Name], our mission is simple: to create a space where every voice matters. We believe that even the shortest messages can inspire, connect, and bring change.</p>
          </div>

          <div>
            <div>
            <h2>🎯 Our Aim</h2>
            <p>To provide a fast, easy, and engaging platform where users can share their thoughts in a short and meaningful format.</p>
            </div>

            <div>
              <h2>🚀 Our Mission</h2>
              <p>Empower Expression – Allow users to share ideas freely and creatively.</p>
              <p>Ensure Simplicity – Keep everything quick, user-friendly, and accessible</p>
              <p>Prioritize Privacy – Maintain a safe and secure environment for all users</p>

            </div>

          </div>
        </motion.div>



        </section>




      </section>


      <h2>Thanks you for connect out family</h2>

  




    </article>
  )
}

export default AboutNow