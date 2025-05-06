import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaXTwitter } from 'react-icons/fa6';
import { FiFacebook, FiLinkedin, } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-white text-white py-3 px-4 border-t" style={{ borderColor: 'rgba(224,170,62,1)' }}>
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                <ul className="flex flex-wrap gap-4 text-sm font-light text-gray-400">
                <li>
                    <Link href="/cgu" className="hover:text-[rgba(224,170,62,1)] transition-colors">
                    CGU
                    </Link>
                </li>
                <li>
                    <Link href="/cgv" className="hover:text-[rgba(224,170,62,1)] transition-colors">
                    CGV
                    </Link>
                </li>
                <li>
                    <Link href="/confidentialite" className="hover:text-[rgba(224,170,62,1)] transition-colors">
                    Politique de confidentialité
                    </Link>
                </li>
                <li>
                    <Link href="/mentions-legales" className="hover:text-[rgba(224,170,62,1)] transition-colors">
                    Mentions légales
                    </Link>
                </li>
                </ul>

                <div className="flex gap-4 text-gray-400 text-lg">
                    <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[rgba(224,170,62,1)] transition-colors">
                        <FaInstagram className="hover:text-[rgba(224,170,62,1)] transition-colors" />
                        </div>
                    </Link>
                    <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[rgba(224,170,62,1)] transition-colors">
                        <FiFacebook className="hover:text-[rgba(224,170,62,1)] transition-colors" />
                        </div>
                    </Link>
                    <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[rgba(224,170,62,1)] transition-colors">
                        <FaXTwitter className="hover:text-[rgba(224,170,62,1)] transition-colors" />
                        </div>
                    </Link>
                    <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:border-[rgba(224,170,62,1)] transition-colors">
                        <FiLinkedin className="hover:text-[rgba(224,170,62,1)] transition-colors" />
                        </div>
                    </Link>
                </div>
            </div>
        </footer>
    );
}
