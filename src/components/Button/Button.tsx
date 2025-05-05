import React from 'react';
import Link from 'next/link';

type ButtonLinkProps = {
    title: string;
    route: string;
};

export default function Button({ title, route }: ButtonLinkProps) {
    return (
        <Link
            href={route}
            className="w-full inline-block px-6 py-2 text-white font-normal border-1 transition-colors duration-300 bg-white/10 backdrop-blur-md hover:text-[rgba(224,170,62,1)] hover:border-[rgba(224,170,62,1)]"
        >
            {title}
        </Link>
    );
}
