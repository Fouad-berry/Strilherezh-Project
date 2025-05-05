import Navbar from '@/components/Navbar/Navbar';
import SecondaryBar from '@/components/SecondaryBar/SecondaryBar';
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/banner.jpg';
import ProductCategories from '@/components/ProductsCategories/ProductsCategories';
import ProductGrid from '@/components/ProductGrid/ProductGrid';

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
        />
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

      <ProductCategories />

      <div className=" flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-2xl mt-10 mb-5 font-medium secondaryColor ">Nouveautés</h1>
      </div>

      <ProductGrid />

      {/* Section 4 */}

      <div className="relative w-full h-[600px]">
        <Image
          src={banner}
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center pl-10 text-white text-left px-4 w-full sm:w-3/4 lg:w-1/2">
          <h1 className="text-xl font-bold mb-2 text-left">Notre histoire</h1>
          <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod voluptas. Repellendus nam reprehenderit atque, culpa eum placeat quas dolores quibusdam qui delectus, ex odio sequi! Quas, cupiditate atque. Ab.</p>
          <p className="text-sm font-extralight mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est ullam cupiditate? Recusandae nesciunt nostrum odit, velit numquam eos nihil nemo quibusdam possimus, totam maiores tempore! Aspernatur suscipit omnis accusantium.</p>
          <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod voluptas. Repellendus nam reprehenderit atque, culpa eum placeat quas dolores quibusdam qui delectus, ex odio sequi! Quas, cupiditate atque. Ab.</p>
          <p className="text-sm font-extralight mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est ullam cupiditate? Recusandae nesciunt nostrum odit, velit numquam eos nihil nemo quibusdam possimus, totam maiores tempore! Aspernatur suscipit omnis accusantium.</p>
          <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod voluptas. Repellendus nam reprehenderit atque, culpa eum placeat quas dolores quibusdam qui delectus, ex odio sequi! Quas, cupiditate atque. Ab.</p>
          <p className="text-sm font-extralight mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est ullam cupiditate? Recusandae nesciunt nostrum odit, velit numquam eos nihil nemo quibusdam possimus, totam maiores tempore! Aspernatur suscipit omnis accusantium.</p>
        </div>
      </div>

      {/* Section 5 */}
      
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
    </div>
  );
};

export default page;