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

      <div className="size-40 border absolute filter blur-md bg-violet-300  opacity-10"></div>

      <section className=" p-4">
        {/* 2 */}

        <section className="w-full border md:flex gap-8  ">
          <motion.div
            initial={{ rotateY: 180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeInOut" }}
            whileHover={{ scale: 1.01 }}
            className="border flex flex-col space-y-3 flex-1 p-2 bg-white "
          >
            <h2 className="md:text-2xl font-semibold ">Why Our Platform</h2>
            {/* use icon  */}
            <div className="flex flex-col space-y-2">
              <p>
                {" "}
                we provide a seamless and engaging space for users to share
                their thoughts and ideas effortlessly.
              </p>

              <span>
                ✅Accessible Anytime, Anywhere – Share and engage with messages
                from any device, at any time.
              </span>
              <span>
                Creative & Interactive – Add a title, message, and description
                to make your words stand out
              </span>

              <span>User can post short message</span>
            </div>
          </motion.div>

          {/* 2 */}

          {/* img */}
          <div className="flex-1 border flex  justify-center">
            <img src={whyImage} alt="why img" className="md:h-80 h-72 border" />
          </div>
        </section>

        {/* 2nd section */}

        <section className="w-full border md:flex gap-8  ">
          {/* img */}
          <div className="flex-1 flex justify-center">
            <img src={community} alt="community img" className="md:h-80 h-72" />
          </div>

          {/* text */}
          <motion.div
            initial={{ rotateY: -180, opacity: 0 }}
            whileInView={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
            className="flex-1 flex flex-col gap-2 space-y-3"
          >
            <div className="flex flex-col gap-2">
              <h2 className="md:text-2xl font-semibold">
                Why Join Our Community?
              </h2>
              <p>
                We don’t just provide a space for messages—we create an
                experience where ideas thrive. [Your Platform Name] is built for
                those who want to make an impact.
              </p>
            </div>

            <div className="flex gap-2 flex-col">
              <p>
                🛠 Innovative & Dynamic – A fresh take on social interaction
                through short, meaningful messages.
              </p>
              <p>
                💡 Express Yourself Freely – Share your thoughts, ideas, and
                messages in a meaningful way
              </p>
              <p>
                🌍 A Place to Connect – Engage with like-minded individuals and
                discover new perspectives.
              </p>
            </div>
          </motion.div>
        </section>

        {/* 4 */}

        <section className=" border md:flex gap-4 mt-6 ">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="border p-2 flex flex-col gap-4 flex-1"
          >
            <div className="flex flex-col gap-2">
              <h2 className="md:text-2xl font-semibold">
                Your Voice, Your Space
              </h2>

              <p>
                At [Your Platform Name], we believe that every voice matters.
                Whether you want to share a thought, express an idea, or connect
                with others, this is your space to be heard.
              </p>
            </div>

            <div>
              <p>
                🗣 Speak Freely – Share your thoughts in a way that feels right
                for you.
              </p>
              <p>Your simple text louder then your voice</p>
            </div>
          </motion.div>

          {/* 4 */}

          <div className="flex flex-1 justify-center ">
            <img src={voice} alt="voice img" className="md:h-80 h-72" />
          </div>
        </section>

        <section className=" border md:flex gap-4 mt-6 ">
          {/* img */}

          <div className="flex flex-1 justify-center">
            <img src={mission} alt="mission img" className="md:h-80 h-72" />
          </div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="border p-2 flex flex-col gap-2 flex-1"
          >
            <div>
              <h2 className="md:text-2xl font-semibold text-xl">
                Our Aim & Mission
              </h2>
              <p>
                At [Your Platform Name], our mission is simple: to create a
                space where every voice matters. We believe that even the
                shortest messages can inspire, connect, and bring change.
              </p>
            </div>

            <div>
              <div>
                <h2 className="md:text-xl md:font-bold font-semibold">
                  🎯 Our Aim
                </h2>
                <p>
                  To provide a fast, easy, and engaging platform where users can
                  share their thoughts in a short and meaningful format.
                </p>
              </div>

              <div>
                <h2 className="md:text-xl md:font-bold font-semibold">
                  🚀 Our Mission
                </h2>
                <p>
                  Empower Expression – Allow users to share ideas freely and
                  creatively.
                </p>
                <p>
                  Ensure Simplicity – Keep everything quick, user-friendly, and
                  accessible
                </p>
                <p>
                  Prioritize Privacy – Maintain a safe and secure environment
                  for all users
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </section>

      <h2>Thanks you for connect out family</h2>
    </article>
  );
}

export default AboutNow;
