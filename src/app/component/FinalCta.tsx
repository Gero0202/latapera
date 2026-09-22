'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { BrickWallFire, Flame, Heart, Home, Pizza, Star } from 'lucide-react';
import styles from '@/app/css/FinalCta.module.css';

export const FinalCta: React.FC = () => {
  return (
    <section className={styles.section}>
      {/* Luz ambiental de fondo */}
      <div className={styles.glow} />

      <div className={styles.container}>
        
        {/* --- TARJETAS FLOTANTES ALREDEDOR --- */}
        
        {/* Card Flotante 1: Arriba Izquierda */}
        <motion.div
          className={`${styles.floatingCard} ${styles.cardTopLeft}`}
          initial={{ opacity: 0, scale: 0.8, x: -30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -12, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6 },
          }}
        >
          <BrickWallFire size={20} className={styles.iconGold} />
          <span>Fuego a Leña</span>
        </motion.div>

        {/* Card Flotante 2: Arriba Derecha */}
        <motion.div
          className={`${styles.floatingCard} ${styles.cardTopRight}`}
          initial={{ opacity: 0, scale: 0.8, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -15, 0],
            rotate: [2, -3, 2],
          }}
          transition={{
            y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
            rotate: { duration: 5.5, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6 },
          }}
        >
          <Pizza size={20} className={styles.iconRed} />
          <span>Masa Artesanal</span>
        </motion.div>

       {/* Card Flotante 3: Abajo Izquierda */}
        <motion.div
          className={`${styles.floatingCard} ${styles.cardBottomLeft}`}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -10, 0],
            rotate: [1, -2, 1],
          }}
          transition={{
            y: { duration: 3.8, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6 },
          }}
        >
          <Home size={20} className={styles.iconGold} />
          <span>Como en Casa</span>
        </motion.div>

        {/* Card Flotante 4: Abajo Derecha */}
        <motion.div
          className={`${styles.floatingCard} ${styles.cardBottomRight}`}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          animate={{
            y: [0, -12, 0],
            rotate: [-2, 2, -2],
          }}
          transition={{
            y: { duration: 4.2, repeat: Infinity, ease: 'easeInOut' },
            rotate: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            opacity: { duration: 0.6 },
          }}
        >
          <Star size={20} className={styles.iconGold} />
          <span>Sabor Ancestral</span>
        </motion.div>

        {/* --- CONTENIDO CENTRAL --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={styles.centerContent}
        >
        
          
          <h2 className={styles.title}>
            ¡Te esperamos en <br />
            <span className={styles.brand}>La Tapera</span>!
          </h2>

          <p className={styles.subtitle}>
           Vení a buscar tu pedido o sentate a compartir el sabor inconfundible de la leña.
          </p>
        </motion.div>

      </div>
    </section>
  );
};