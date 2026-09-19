// components/Footer/Footer.tsx
import React from 'react';
import styles from '@/app/css/Footer.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.brand}>LA TAPERA — PIZZERÍA A LEÑA</p>
      <p className={styles.copy}>El campo en tu mesa © {new Date().getFullYear()}</p>
    </footer>
  );
};