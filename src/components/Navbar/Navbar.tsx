import { Menu, ShoppingCart, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header>
    <nav className={`w-full px-10 flex items-center justify-between ${styles.navbar}`}>
        
        <div className="flex items-center gap-2">
          <Menu className="w-5 h-5" />
          <span className="text-sm font-medium">Menu</span>
        </div>

        <Link href="/" className="flex items-center justify-center text-center">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={80}
            height={40}
            className={styles.logo}
          />
        </Link>

        <div className="flex items-center gap-6">
          <Link href="/account" className="flex items-center gap-1 text-sm font-medium">
            <User className="w-5 h-5" />
            <span>Compte</span>
          </Link>
          <Link href="/cart" className="flex items-center gap-1 text-sm font-medium">
            <ShoppingCart className="w-5 h-5" />
            <span>Panier</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
