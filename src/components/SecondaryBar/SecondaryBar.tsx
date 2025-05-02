// src/components/SecondaryBar.tsx
import Link from "next/link";
import Image from "next/image";
import styles from "./SecondaryBar.module.css";


export default function SecondaryBar() {
  return (
    <div className="w-full bg-orange-500 text-white">
      <div className="w-full px-10 py-2 flex items-center justify-between">
        
        <div className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={50}
            height={30}
            className="object-contain"
          />
        </div>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/products" className="hover:underline">Tous nos produits</Link>
          <Link href="/histoire" className="hover:underline">Notre histoire</Link>
        </div>

      </div>
    </div>
  );
}
