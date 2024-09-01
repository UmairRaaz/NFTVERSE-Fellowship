"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ItemCollectionsCards from "@/components/ItemCollectionsCards";

const collection = [
  {
    image: "/nfts/nft1.svg",
    name: "CryptoKitty"
  },
  {
    image: "/nfts/nft2.svg",
    name: "EtherDragon"
  },
  {
    image: "/nfts/nft3.svg",
    name: "PixelPunk"
  },
  {
    image: "/nfts/nft4.svg",
    name: "ChainBot"
  },
  {
    image: "/nfts/nft5.svg",
    name: "MetaAlien"
  },
  {
    image: "/nfts/nft6.svg",
    name: "BlockBeast"
  }
];


const ItemCollection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        }
      }
    ]
  };
  

  return (
    <div className=" w-[90%] mb-10 md:w-max-w-5xl lg:max-w-5xl xl:max-w-5xl  2xl:maxw-7xl  mx-auto mt-20"
    id="explore"
    >
      <div className="text-center">
        <p className="text-yellow-300">HOT STUFF</p>
        <h1 className="text-4xl">
          Foremost Item <br /> Collections
        </h1>
      </div>
      <div className=" mt-10 ">
        <Slider {...settings}>
          {collection.map((collec, index) => (
            <div key={index} className="slide-item">
              <ItemCollectionsCards image={collec.image} name={collec.name} size="small" />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ItemCollection;

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "gray",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
};
