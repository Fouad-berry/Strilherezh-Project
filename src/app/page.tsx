import Navbar from '@/components/Navbar/Navbar';
import SecondaryBar from '@/components/SecondaryBar/SecondaryBar';
import Image from 'next/image';
import React from 'react';
import banner from '@/assets/images/banner.jpg';
import ProductCategories from '@/components/ProductsCategories/ProductsCategories';
import ProductGrid from '@/components/ProductGrid/ProductGrid';
import ButtonLink from '@/components/Button/Button';
import Button from '@/components/Button/Button';

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
        <div className="absolute inset-0 flex flex-col justify-center pl-10 text-white text-left px-4 w-full sm:w-3/4 lg:w-1/2 z-10">
          <h1 className="text-2xl font-bold mb-2 text-left">Notre histoire</h1>
          <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod voluptas. Repellendus nam reprehenderit atque, culpa eum placeat quas dolores quibusdam qui delectus, ex odio sequi! Quas, cupiditate atque. Ab.</p>
          <p className="text-sm font-extralight mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est ullam cupiditate? Recusandae nesciunt nostrum odit, velit numquam eos nihil nemo quibusdam possimus, totam maiores tempore! Aspernatur suscipit omnis accusantium.</p>
          <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod voluptas. Repellendus nam reprehenderit atque, culpa eum placeat quas dolores quibusdam qui delectus, ex odio sequi! Quas, cupiditate atque. Ab.</p>
          <p className="text-sm font-extralight mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est ullam cupiditate? Recusandae nesciunt nostrum odit, velit numquam eos nihil nemo quibusdam possimus, totam maiores tempore! Aspernatur suscipit omnis accusantium.</p>
          <p className="text-sm font-extralight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quod voluptas. Repellendus nam reprehenderit atque, culpa eum placeat quas dolores quibusdam qui delectus, ex odio sequi! Quas, cupiditate atque. Ab.</p>
          <p className="text-sm font-extralight mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus est ullam cupiditate? Recusandae nesciunt nostrum odit, velit numquam eos nihil nemo quibusdam possimus, totam maiores tempore! Aspernatur suscipit omnis accusantium.</p>
          <div className="self-start">
            <Button title="Découvrir notre histoire" route="/produits" />
          </div>
        </div>
      </div>
      

      {/* Section 5 */}
      
      <div className="relative w-full h-[600px]">
        <Image
          src={banner}
          alt="Bannière"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 flex flex-col justify-center items-end px-4 z-10">
              <div className="w-full sm:w-3/4 lg:w-1/2 pr-10 text-white text-right">
            <h1 className="text-2xl font-bold mb-2">Nos produits</h1>

            <p className="text-sm font-extralight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nulla beatae ducimus aperiam! Quibusdam illum inventore quas earum soluta quo. Repellat reiciendis consequatur quo nam repudiandae velit dolore voluptatum ab.
            </p>
            <p className="text-sm font-extralight mb-5">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic sequi, laudantium sapiente nobis impedit quo omnis soluta dolore necessitatibus numquam vero possimus reiciendis, ad deserunt eius totam molestias, officia obcaecati!
            </p>
            <p className="text-sm font-extralight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel ea, veritatis tempora rem soluta alias voluptatum laboriosam veniam numquam, accusantium ut dignissimos et aperiam maxime eius cupiditate, sed nam quam?
            </p>
            <p className="text-sm font-extralight mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, iste? Eos amet perspiciatis fugit harum id dolorum labore? Quasi, repellat. Officia dolore, corporis harum recusandae dolorum voluptates quam tenetur adipisci!
            </p>
            <p className="text-sm font-extralight">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis, perferendis nobis dolorum id assumenda impedit quos reiciendis fuga dolores exercitationem cupiditate fugiat aliquid quod nostrum cum in, minima a qui.
            </p>
            <p className="text-sm font-extralight mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, itaque neque. In tempora amet facilis, eveniet iste numquam, ut quia dolorum aspernatur possimus nesciunt sint alias sapiente, perferendis dolor doloremque.
            </p>

            <div className="w-full flex justify-end mt-6">
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
    </div>
  );
};

export default page;