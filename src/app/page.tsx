import Navbar from '@/components/Navbar/Navbar';
import SecondaryBar from '@/components/SecondaryBar/SecondaryBar';
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/banner.jpg';

const page = () => {
  return (
    <div>
      <Navbar />
      <SecondaryBar />
      <div className="relative w-full h-[400px]">
        <Image
          src={banner}
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />rgba(224, 170, 62, 1)
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl font-light primaryColor ">STRILHEREZH</h1>
          <p className="text-6xl mt-2 font-light uppercase">L'ACOOL BRETON</p>
          <p className="text-md mt-1 font-normal">L'essence de la bretagne en chaque goutte.</p>
        </div>
      </div>

      <div className=" flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl mt-10 font-medium secondaryColor ">Nos maisons</h1>
          <p className="text-md mt-1 mb-10 font-extralight text-black">Découvrez nos différents produits</p>
      </div>

      Bonjour
    </div>
  );
};

export default page;