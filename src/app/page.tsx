import Navbar from '@/components/Navbar/Navbar';
import SecondaryBar from '@/components/SecondaryBar/SecondaryBar';
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/banner.jpg';
import ProductCategories from '@/components/ProductsCategories/ProductsCategories';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import Button from '@/components/Button/Button';
import PreFooter from '@/components/PreFooter/PreFooter';
import Footer from '@/components/Footer/Footer';

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
          <p className="text-6xl mt-2 font-light uppercase">L&apos;ACOOL BRETON</p>
          <p className="text-md mt-1 font-normal">L&apos;essence de la bretagne en chaque goutte.</p>
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

      <div className="relative w-full min-h-[600px]">
        <Image
          src={banner}
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-start px-4 py-10 z-10">
          <div className="text-white text-left max-w-2xl w-full">
            <h1 className="text-2xl font-bold mb-4">Notre histoire</h1>
            <div className="space-y-4 text-sm font-extralight">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
            <div className="mt-6">
              <Button title="Découvrir notre histoire" route="/produits" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Section 5 */}
      <div className="relative w-full min-h-[600px]">
        <Image
          src={banner}
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-end px-4 py-10 z-10">
          <div className="text-white text-right max-w-2xl w-full">
            <h1 className="text-2xl font-bold mb-4">Nos produits</h1>
            <div className="space-y-4 text-sm font-extralight">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
            </div>
            <div className="mt-6 flex justify-end">
              <div className="w-[250px] flex flex-col gap-4">
                <Button title="Découvrir nos whisky" route="/nos-whisky" />
                <Button title="Découvrir nos cidres" route="/nos-cidres" />
                <Button title="Découvrir nos vins" route="/nos-vins" />
                <Button title="Découvrir nos exclusivités" route="/nos-exclusivités" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PreFooter />
      <Footer />
    </div>
  );
};

export default page;