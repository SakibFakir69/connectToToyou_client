import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";

import whyImage from "../../public/Business solution-pana.png";
import community from "../../public/Team spirit-pana.png";
import voice from "../../public/Voice chat-rafiki.png";
import mission from "../../public/Business mission-rafiki.png";

function AboutNow() {
  return (
    <article className="w-full flex flex-col justify-center items-center">
      {/* take content  */}
      {/* take group */}

      <div className="size-40  absolute filter blur-md bg-violet-300  opacity-10"></div>

      <section className=" p-4">
        {/* 2 */}

        <section className="w-full  md:flex gap-8  ">
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            whileHover={{ scale: 1.01 }}
            className=" flex flex-col space-y-3 flex-1 p-3 bg-gradient-to-b bg-black rounded"
          >
            <h2 className="md:text-2xl font-semibold text-xl text-white ml-5">Why Our Platform</h2>
            {/* use icon  */}

            <div className="flex flex-col space-y-5 p-2 px-5">
              <p className="font-semibold text-slate-200">
                {" "}
                <i class="ri-dashboard-line text-green-400"></i> we provide a seamless and engaging space for users to share
                their thoughts and ideas effortlessly.
              </p>

              <span className="text-slate-200 opacity-85">
                <i class="ri-star-s-fill text-yellow-400"></i> Accessible Anytime, Anywhere – Share and engage with messages
                from any device, at any time.
              </span>
              <span className="text-slate-200 opacity-85">
              <i class="ri-star-s-fill text-yellow-400"></i> Creative & Interactive – Add a title, message, and description
                to make your words stand out
              </span>

              <span className="text-slate-200 opacity-85"><i class="ri-star-s-fill text-yellow-400"></i> User can post short message</span>
            </div>
          </motion.div>

          {/* 2 */}

          {/* img */}
          <motion.div 

          initial={{opacity:0,scale:0}}
          whileInView={{opacity:1,scale:1}}
          transition={{duration:0.5, delay:0.2,ease:"easeInOut"}}
    
          
          
          className="flex-1 flex  justify-center">
            <img src={whyImage} alt="why img" className="md:h-80 h-72 " />
          </motion.div>
          
        </section>

        {/* 2nd section */}

        <section className="w-full  md:flex gap-8  ">
          {/* img */}
          <motion.div
          initial={{scale:0.5,opacity:0.5,rotate:90}}
          whileInView={{scale:1,opacity:1,rotate:0}}
          transition={{duration:0.5,delay:0.25,ease:"easeInOut"}}
          
          
          
          
          className="flex-1 flex justify-center">

            <img src={community} alt="community img" className="md:h-80 h-72" />
          </motion.div>

          {/* text */}
          <motion.div
            initial={{ rotateY: -180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="flex-1 flex flex-col gap-2 space-y-3 bg-violet-500 p-3"
          >
            <div className="flex flex-col gap-2">
              <h2 className="md:text-2xl font-semibold text-white text-xl">
                Why Join Our Community?
              </h2>
              <p>
              <i class="ri-dashboard-line text-fuchsia-600 font-semibold"></i>
              <span className="font-semibold text-stone-100"> We don’t just provide a space for messages—we create an
                experience where ideas thrive. [Your Platform Name] is built for
                those who want to make an impact.</span>
              </p>
            </div>

            <div className="flex gap-2 flex-col">
              <p className="text-stone-100">
                🛠 Innovative & Dynamic – A fresh take on social interaction
                through short, meaningful messages.
              </p>
              <p  className="text-stone-100">
                💡 Express Yourself Freely – Share your thoughts, ideas, and
                messages in a meaningful way
              </p>
              <p  className="text-stone-100">
                🌍 A Place to Connect – Engage with like-minded individuals and
                discover new perspectives.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 4 */}

        <section className="  md:flex gap-4 mt-6 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className=" p-3 flex flex-col gap-4 flex-1 bg-red-500 "
          >
            <div className="flex flex-col gap-2  p-2">
              <h2 className="md:text-2xl font-semibold text-white text-xl">
                Your Voice, Your Space
              </h2>

              <p className="font-semibold text-slate-200 opacity-95">
                At [Your Platform Name], we believe that every voice matters.
                Whether you want to share a thought, express an idea, or connect
                with others, this is your space to be heard.
              </p>

              
            </div>

            <div className=" flex flex-col spcae-y-3 p-2">
              <p className="text-stone-200 opacity-85">
                🗣 Speak Freely – Share your thoughts in a way that feels right
                for you.
              </p>
              <p  className="text-stone-200 ml-4 opacity-85">Your simple text louder then your voice</p>
            </div>

          </motion.div>

          {/* 4 */}

          <motion.div

          initial={{scale:0, opacity:0.4,rotate:180}}
          whileInView={{scale:1, opacity:1,rotate:0 }}
          transition={{duration:0.5, delay:0.2, ease:"easeInOut"}}
          className="flex flex-1 justify-center ">
            <img src={voice} alt="voice img" className="md:h-80 h-72" />
          </motion.div>
        </section>

        <section className="  md:flex gap-4 mt-6 ">
          {/* img */}

          <motion.div
          initial={{x:-100}}
          whileInView={{x:0}}
          transition={{duration:0.5, delay:0.2,ease:"easeInOut"}}
          
          className="flex flex-1 justify-center">
            <img src={mission} alt="mission img" className="md:h-80 h-72" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="bg-fuchsia-600  flex flex-col gap-2 flex-1 p-3 rounded"
          >
            <div>
              <h2 className="md:text-2xl font-semibold text-xl text-white">
                Our Aim & Mission
              </h2>
              <p className="text-stone-200 font-semibold">
                At [Your Platform Name], our mission is simple: to create a
                space where every voice matters. We believe that even the
                shortest messages can inspire, connect, and bring change.
              </p>
            </div>

            <div>
              <div>
                <h2 className="md:text-xl md:font-bold font-semibold text-white">
                  🎯 Our Aim
                </h2>
                <p className="text-stone-50 opacity-96">
                  To provide a fast, easy, and engaging platform where users can
                  share their thoughts in a short and meaningful format.
                </p>
              </div>

              <div>
                <h2 className="md:text-xl md:font-bold font-semibold text-white">
                  🚀 Our Mission
                </h2>
                <p className="text-stone-50 opacity-95">
                <i class="ri-star-fill"></i> Empower Expression – Allow users to share ideas freely and
                  creatively.
                </p>
                <p className="text-stone-50 opacity-96">
                <i class="ri-star-fill"></i> Ensure Simplicity – Keep everything quick, user-friendly, and
                  accessible
                </p>
                <p className="text-stone-50 opacity-96">
                <i class="ri-star-fill"></i> Prioritize Privacy – Maintain a safe and secure environment
                  for all users
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </section>

    </article>
  );
}

export default AboutNow;
