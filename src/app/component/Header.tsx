// components/Header/Header.tsx
'use client';

import React, { useState } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '@/app/css/Header.module.css';

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.brand}>
        <Flame className={styles.logoIcon} size={22} />
        <div>
          <span className={styles.title}>LA TAPERA</span>
          <span className={styles.subtitle}>HORNO DE BARRO</span>
        </div>
      </div>

      <button 
        className={styles.menuToggle} 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Menú"
      >
        {isOpen ? <X size={26} color="#D4AF37" /> : <Menu size={26} color="#D4AF37" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className={styles.mobileNav}
          >
            <a href="#como-pedir" onClick={() => setIsOpen(false)}>¿Cómo pedir?</a>
            <a href="#menu-pizzas" onClick={() => setIsOpen(false)}>Pizzas</a>
            <a href="#menu-promos" onClick={() => setIsOpen(false)}>Promociones</a>
            <a href="#menu-bebidas" onClick={() => setIsOpen(false)}>Bebidas</a>
            <a href="#contacto" onClick={() => setIsOpen(false)}>Ubicación e Info</a>
            <a href="#nosotros" onClick={() => setIsOpen(false)}>Nosotros</a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};