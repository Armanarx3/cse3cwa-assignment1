// app/components/Header.tsx
import React from 'react';
import styles from './Header.module.css'; // We will create this file next

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.studentInfo}>22081507</div>
      <div className={styles.title}>Title</div>
      {/* Menu will go here in Week 2 */}
    </header>
  );
};

export default Header;