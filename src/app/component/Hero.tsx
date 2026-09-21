// components/Hero/Hero.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Flame, MessageCircle, UtensilsCrossed } from 'lucide-react';
import styles from '@/app/css/Hero.module.css';
import { FaWhatsapp } from 'react-icons/fa';

interface HeroProps {
  whatsappNumber: string;
}

export const Hero: React.FC<HeroProps> = ({ whatsappNumber }) => {
  return (
    <section className={styles.hero}>
      {/* Luces de fondo rústicas e iluminadas */}
      <div className={styles.bgGlowTop} />
      <div className={styles.bgGlowBottom} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <div className={styles.badge}> <Flame size={20}/> Horno de Barro a Leña</div>
        <h1 className={styles.title}>LA TAPERA</h1>
        <p className={styles.slogan}>El campo en tu mesa</p>

        <p className={styles.description}>
          Masa artesanal estacionada, ingredientes seleccionados y el inconfundible sabor del barro ancestral.
        </p>

        <div className={styles.actions}>
          <a href="#menu-pizzas" className={styles.btnPrimary}>
            <UtensilsCrossed size={18} /> Ver Carta Completa
          </a>
          <a
            href={`https://wa.me/${whatsappNumber}?text=¡Hola!%20Quiero%20hacer%20un%20pedido`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnWhatsapp}
          >
            <FaWhatsapp size={18} /> Pedir por WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
};