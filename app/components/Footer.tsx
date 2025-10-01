// app/components/Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>
        © {currentYear} Copyright | Stefanus Hendryan Widjaja | 22081507 | {new Date().toLocaleDateString()}
      </p>
    </footer>
  );
};

export default Footer;