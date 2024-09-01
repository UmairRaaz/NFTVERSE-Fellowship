"use client";
import TopCollectionCard from "@/components/TopCollectionCard";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TopCollections = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const options = {
        method: "GET",
        url: "https://api.reservoir.tools/collections/trending-mints/v1?limit=12",
        headers: {
          accept: "*/*",
          "x-api-key": process.env.API_KEY,
        },
      };

      try {
        const response = await axios.request(options);
        setCollections(response.data.mints);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      } 
    };

    fetchCollections();
  }, []);
  return (
    <div className="mt-32  w-[90%] mb-10 md:w-max-w-5xl lg:max-w-5xl xl:max-w-5xl  2xl:maxw-7xl mx-auto ">
      <div className="text-center">
        <p className="text-yellow-300">NFTs Collections +</p>
        <h1 className="text-4xl">Top Collections</h1>
        <h1 className="text-4xl mt-2 text-yellow-400">In a Week</h1>
      </div>
      <div className=" mt-10  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {collections.length > 0 &&
          collections.map((collection, index) => (
            <TopCollectionCard key={index} collection={collection} index={index} />
          ))}
      </div>
    </div>
  );
};

export default TopCollections;
