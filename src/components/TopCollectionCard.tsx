import Image from "next/image";
import React from "react";

interface Collection {
  image: string;
  name: string;
  mintCount: number;
  ownerCount: number;
}

const TopCollectionCard: React.FC<{ collection: Collection; index: number }> = ({
  collection,
  index,
}) => {
  const truncateName = (name: string, wordLimit: number): string => {
    const words = name.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return name;
  };

  return (
    <div className="h-20 hover:scale-105 cursor-pointer transition-all flex border rounded-xl">
      <div className="p-2 pl-4 text-md flex items-center justify-center">
        {index + 1} {")"}
      </div>
      <div className="w-[30%] flex items-center justify-center">
        <div className="relative border border-gray-200 rounded-full w-16 h-16">
          <Image
            src={collection.image}
            alt="image"
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>
      <div className="text-lg py-2">
        <p className="uppercase">{truncateName(collection.name, 2)}</p>
        <p className="text-xs text-yellow-400">
          <span>Mint Count:</span> {collection.mintCount}
        </p>
        <p className="text-xs text-yellow-400">
          <span>Owner Count:</span> {collection.ownerCount}
        </p>
      </div>
    </div>
  );
};

export default TopCollectionCard;
