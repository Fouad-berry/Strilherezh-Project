import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6';

export default function Footer() {
    return (
        <footer className="bg-neutral-900 text-white py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
            <ul className="flex flex-wrap gap-4 text-sm text-gray-400">
            <li>
                <Link href="/cgu" className="hover:text-white transition-colors">
                CGU
                </Link>
            </li>
            <li>
                <Link href="/cgv" className="hover:text-white transition-colors">
                CGV
                </Link>
            </li>
            <li>
                <Link href="/confidentialite" className="hover:text-white transition-colors">
                Politique de confidentialité
                </Link>
            </li>
            <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                Mentions légales
                </Link>
            </li>
            </ul>

            <div className="flex gap-4 text-gray-400 text-lg">
                <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="hover:text-white transition-colors" />
                </Link>
                <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="hover:text-white transition-colors" />
                </Link>
                <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaXTwitter className="hover:text-white transition-colors" />
                </Link>
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="hover:text-white transition-colors" />
                </Link>
            </div>
        </div>
        </footer>
    );
}
