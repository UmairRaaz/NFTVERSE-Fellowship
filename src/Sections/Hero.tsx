import ParticleBackground from "@/components/ParticlesBackground";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="w-[90%] mb-10 md:w-max-w-5xl lg:max-w-5xl  py-10  mx-auto"
    id="home"
    >
      <div className="pt-10">
        <p className="text-xl text-center mb-2 text-yellow-300">
          The NFT marketplace with everything for everyone
        </p>
        <h1 className="text-6xl tracking-wider leading-[1.1] font-bold text-center">
          Discover{" "}
          <div
            className="w-24 h-10 inline-block bg-cover rounded-full"
            style={{ backgroundImage: `url(/heroOne.png)` }}
          ></div>{" "}
          Collect <br /> and Sell{" "}
          <div
            style={{ backgroundImage: `url(/heroTwo.webp)` }}
            className="w-32 h-10 inline-block  rounded-full bg-cover"
          ></div>{" "}
          <br /> Remarakable NFTs.
        </h1>
      </div>

      <div className="mt-20 flex relative items-center justify-center">
        <div className="max-w-[20rem] left-6 top-10 text-right absolute items-center gap-6 hidden md:flex">
          <p className="text-sm text-gray-400">
            Find Digital Artwork by professionals and discover the true meaning
            of the artwork
          </p>
          <Image src={"/nftIcon.png"} width={100} height={100} alt="icon" />
        </div>
        <div
          className="h-96 w-60 bg-cover z-10 rounded-full"
          style={{ backgroundImage: `url(/heroThree.jpg)` }}
        ></div>
        <div
          style={{ backgroundImage: `url(/heroFour.jpg)` }}
          className="h-[20rem] hidden md:block w-44 absolute top-20 left-[23rem] bg-cover rounded-full"
        ></div>
        <div className="max-w-[10rem] right-36 bottom-10 text-left absolute  items-center gap-6 hidden md:flex">
          <p className="text-sm text-gray-400">
            Find Digital Artwork by professionals and discover the true meaning
            of the artwork
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
