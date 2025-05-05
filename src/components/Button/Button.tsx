import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
  title: string;
  route: string;
};

export default function ButtonLink({ title, route }: ButtonLinkProps) {
  return (
    <Link
      href={route}
      className="inline-block px-6 py-2 bg-black text-black font-medium rounded-2xl hover:bg-gray-800 transition-colors duration-300"
    >
      {title}
    </Link>
  );
}
