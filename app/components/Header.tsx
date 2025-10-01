// app/components/Header.tsx
'use client';

import React, { useState } from 'react'; // Import useState
import styles from './Header.module.css';
import Link from 'next/link'; // Import Link for navigation
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu toggle

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.studentInfo}>
        <Link href="/">22081507</Link>
      </div>
      <ThemeToggle />
      <nav>
        <button 
            className={`${styles.menuButton} ${isMenuOpen ? styles.open : ''}`} 
            onClick={toggleMenu}
        >
            ☰
        </button>
        {isMenuOpen && (
          <ul className={styles.menu}>
            <li><Link href="/">Tabs</Link></li>
            <li><Link href="/escape-room">Escape Room</Link></li>
            <li><Link href="/coding-races">Coding Races</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;