"use client";
import React, { useEffect, useState } from "react";
import DiscoverCollectionCards from "../components/DiscoverCollectionCards";
import axios from "axios";
import { motion } from "framer-motion";

const DiscoverCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const options = {
        method: "GET",
        url: "https://api.reservoir.tools/collections/v7?limit=8",
        headers: {
          accept: "*/*",
          "x-api-key": process.env.API_KEY,
        },
      };

      try {
        const response = await axios.request(options);
        setCollections(response.data.collections);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchCollections();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "linear" }}
      className="mt-20  w-[90%] mb-10 md:w-max-w-5xl lg:max-w-5xl xl:max-w-5xl  2xl:maxw-7xl  mx-auto "
    >
      <div className="text-center">
        <p className="text-yellow-300">Discover+</p>
        <h1 className="text-4xl">Discover Items</h1>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {collections.map((collection, index) => (
          <DiscoverCollectionCards key={index} collection={collection} />
        ))}
      </div>
    </motion.div>
  );
};

export default DiscoverCollections;
