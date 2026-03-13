"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          Leenntree
        </Link>
        <div className={styles.links}>
          <Link href="/" className={`${styles.link} ${pathname === "/" ? styles.active : ""}`}>
            Inicio
          </Link>
          <Link href="/blog" className={`${styles.link} ${pathname?.startsWith("/blog") ? styles.active : ""}`}>
            Blog
          </Link>
          <Link href="/proyectos" className={`${styles.link} ${pathname?.startsWith("/proyectos") ? styles.active : ""}`}>
            Proyectos
          </Link>
        </div>
      </div>
    </nav>
  );
}
