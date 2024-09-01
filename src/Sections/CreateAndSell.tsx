'use client'
import { motion } from "framer-motion";
import React from "react";

const CreateAndSell = () => {
  return (
    <div className="mt-32 md:w-max-w-5xl mx-auto lg:max-w-5xl xl:max-w-5xl 2xl:maxw-7xl" id="createandsell">
      <div className="text-center">
        <p className="text-yellow-300">To Be a Creator +</p>
        <h1 className="text-4xl">Create and Sell</h1>
        <h1 className="text-4xl mt-2">Your NFTs</h1>
      </div>
      <div className="mt-10 flex px-4 flex-col md:flex-row justify-evenly">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 0 * 0.3 }} // Adjust delay for staggered effect
          className="w-full md:h-72 md:w-24 my-6 border py-2"
        >
          <div className="h-[20%] text-yellow-200 text-2xl py-2 border-b border-yellow-300 text-center">
            01.
          </div>
          <h1 className="md:rotate-90 text-xl md:mt-14 py-4 text-center text-nowrap">
            Set up your wallet
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 1 * 0.3 }}
          className="md:w-96 bg-yellow-300 border bg-cover relative"
          style={{ backgroundImage: `url(/banner.jpg)` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative text-center md:text-left text-yellow-200 text-2xl py-2 border-b border-yellow-300 px-6 z-10">
            02.
          </div>
          <div className="relative md:top-32 z-10 p-6 text-white">
            <h1 className="text-2xl uppercase">Create Your Collection</h1>
            <p className="mt-2 text-md">
              <span className="text-red-400">Start your journey</span> by creating a stunning collection.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 2 * 0.3 }}
          className="w-full md:h-72 md:w-24 my-6 border py-2"
        >
          <div className="h-[20%] text-yellow-200 text-2xl py-2 border-b border-yellow-300 text-center">
            03.
          </div>
          <h1 className="md:rotate-90 text-xl md:mt-14 py-4 text-center text-nowrap">
            Add Your NFTs
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "linear", delay: 3 * 0.3 }}
          className="w-full md:h-72 md:w-24 my-6 border py-2"
        >
          <div className="h-[20%] text-yellow-200 text-2xl py-2 border-b border-yellow-300 text-center">
            04.
          </div>
          <h1 className="md:rotate-90 text-xl md:mt-14 py-4 text-center text-nowrap">
            List them for sales
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default CreateAndSell;
