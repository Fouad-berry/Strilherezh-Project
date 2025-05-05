import React from 'react';
import Image from 'next/image';
import styles from './ProductsCategories.module.css';
import alcool from '@/assets/images/alcool.jpg';

const categories = [
  {
    title: 'Nos Whiskys',
    description: 'Découvrez notre sélection de whiskys d’exception aux arômes raffinés.',
    image: alcool,
  },
  {
    title: 'Nos Cidres',
    description: 'Une gamme artisanale de cidres naturels et rafraîchissants.',
    image: alcool,
  },
  {
    title: 'Nos Vins',
    description: 'Une collection de vins soigneusement sélectionnés pour tous les palais.',
    image: alcool,
  },
  {
    title: 'Nos Exclus',
    description: 'Des produits uniques en édition limitée à ne pas manquer.',
    image: alcool,
  },
];

export default function ProductCategories() {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
    {categories.map((cat, idx) => (
      <div
        key={idx}
        className={`relative h-80 sm:h-96 lg:h-[28rem] ${styles.card}`} // Hauteurs augmentées ici
      >
        <Image
          src={cat.image}
          alt={cat.title}
          fill
          className={`object-cover ${styles.image}`}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-end text-left text-white p-4">
          <h3 className="text-2xl font-bold mb-2 text-left">{cat.title}</h3>
          <p className="text-sm font-extralight">{cat.description}</p>
        </div>
      </div>
    ))}
  </div>
  );
}
