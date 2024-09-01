"use client";
import Image from "next/image";
import React from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { FaLongArrowAltUp } from "react-icons/fa";

interface Collection {
  externalUrl: string;
  image: string;
  onSaleCount: number;
  symbol: string;
  name: string;
  volume: {
    "1day": number;
    "7day": number;
    "30day": number;
    total: number;
  };
}

const DiscoverCollectionCards: React.FC<{ collection: Collection }> = ({ collection }) => {
  return (
    <div
      className="h-80 border hover:scale-105 transition-all px-2 py-1 cursor-pointer"
      onClick={() => window.open(collection.externalUrl, "_blank")}
    >
      <div className="image rounded h-[75%] border">
        <Image
          src={collection.image}
          width={100}
          height={100}
          alt="image"
          className="w-full h-full object-cover overflow-hidden"
        />
      </div>
      <div>
        <div className="flex justify-between p-2 text-sm">
          <p className="flex items-center text-yellow-300 gap-2">
            <FcSalesPerformance />
            {collection.onSaleCount}
          </p>
          <p className="flex items-center text-gray-300">{collection.symbol}</p>
        </div>
        <div className="flex justify-between p-2">
          <p className="text-lg text-gray-300">{collection.name.split(" ")[0]}</p>
          <p className="flex items-center text-yellow-300">
            <FaLongArrowAltUp />
            {collection.volume["1day"].toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscoverCollectionCards;
