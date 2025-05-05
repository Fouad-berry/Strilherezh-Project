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
    <div className="py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className={`bg-white rounded-2xl overflow-hidden shadow-md ${styles.card}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={cat.image}
                alt={cat.title}
                className={`${styles.image} w-full h-48 object-cover`}
                width={400}
                height={200}
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
              <p className="text-gray-600 text-sm">{cat.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
