import React from "react";

interface ItemCollectionsCardsProps {
  image: string;
  size: "small" | "large";
  name: string;
}

const ItemCollectionsCards: React.FC<ItemCollectionsCardsProps> = ({
  image,
  size,
  name,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={`h-[27rem] mx-4 bg-cover relative bg-no-repeat bg-center  rounded-xl transition-transform duration-500 ${
        size === "large" ? "transform scale-110" : "transform scale-90"
      }`}
    >
      <h1 className="text-3xl z-10 absolute bottom-12 bg-yellow-300 rounded-lg px-2 py-1 font-bold uppercase left-2 text-gray-950">{name}</h1>
    </div>
  );
};

export default ItemCollectionsCards;
