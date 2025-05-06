import React from 'react';
import Link from 'next/link';

const prefooterContent = [
    {
        title: 'Stilherezeh',
        items: [
            { label: 'Notre histoire', href: '/notre-histoire' },
            { label: 'Tous nos produits', href: '/valeurs' },
        ],
    },
    {
        title: 'Skornenn',
        items: [
            { label: 'Histoire de Skornenn', href: '/contact' },
            { label: 'Cidres natures', href: '/faq' },
            { label: 'Cidres de feu', href: '/support' },
            { label: 'Cidres de glace', href: '/mentions-legales' },
        ],
    },
    {
        title: 'Vins',
        items: [
            { label: 'Vins bio', href: '/vins/bio' },
            { label: 'Vins rouges', href: '/vins/rouges' },
            { label: 'Vins blancs', href: '/vins/blancs' },
            { label: 'Vins rosés', href: '/vins/roses' },
        ],
    },
    {
        title: 'Whiskys',
        items: [
            { label: 'Histoire de "Whisky"', href: '/whyski/ecossais' },
            { label: 'Catégorie 1', href: '/exclusivites/nouveautes' },
            { label: 'Catégorie 2', href: '/exclusivites/limitees' },
        ],
    },
    {
        title: 'Exclusivités',
        items: [
            { label: 'Catégorie 1', href: '/exclusivites/nouveautes' },
            { label: 'Catégorie 2', href: '/exclusivites/limitees' },
        ],
    },
    ];

export default function PreFooter() {
    return (
            <div className="bg-white text-[rgba(170, 170, 170, 1)] py-12 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                {prefooterContent.map((section, index) => (
                <div key={index}>
                    <h3 className="text-lg font-semibold mb-4 primaryColor">{section.title}</h3>
                    <ul className="space-y-2 text-sm text-gray-400 cursor-pointer">
                    {section.items.map((item, idx) => (
                        <li key={idx}>
                        <Link
                            href={item.href}
                            className="transition-colors duration-200"
                        >
                            {item.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
                ))}
            </div>
            <div className="text-center mt-12 text-xm font-light text-gray-400">
                ©Skornenn 2025 - STRILHEREZH, France.
            </div>
        </div>
    );
}
