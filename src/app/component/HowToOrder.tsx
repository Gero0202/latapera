// components/HowToOrder/HowToOrder.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, MessageCircle, Sparkles, ArrowRight } from 'lucide-react';
import styles from '@/app/css/HowToOrder.module.css'; // Ajustá la ruta si tu archivo CSS está en /app/css/HowToOrder.module.css

export const HowToOrder: React.FC = () => {
  const steps = [
    {
      stepNumber: '01',
      icon: <Utensils size={22} />,
      title: 'Elegí tu variedad',
      desc: 'Explorá nuestras pizzas a la leña, promociones para compartir y bebidas.',
    },
    {
      stepNumber: '02',
      icon: <MessageCircle size={22} />,
      title: 'Escribinos al WhatsApp',
      desc: 'Mandanos un mensaje con tu elección, dirección de envío o si retirás por el local.',
    },
    {
      stepNumber: '03',
      icon: <Sparkles size={22} />,
      title: '¡A disfrutar!',
      desc: 'Recibí tu pizza recién salida del horno de barro, crocante y caliente en tu mesa.',
    },
  ];

  return (
    <section id="como-pedir" className={styles.container}>
      {/* Resplandores de fondo estilo rústico / moderno */}
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowRight} />

      <div className={styles.innerContainer}>
        {/* Encabezado */}
        <div className={styles.headerGroup}>
          <span className={styles.topBadge}>
            <Sparkles size={14} className={styles.badgeIcon} /> PASO A PASO
          </span>
          <h2 className={styles.title}>¿CÓMO PEDIR?</h2>
          <p className={styles.subtitle}>
            Elegí tu variedad, escribinos por WhatsApp y disfrutá del auténtico sabor a leña.
          </p>
        </div>

        {/* Pasos */}
        <div className={styles.stepsWrapper}>
          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -6 }}
                className={styles.stepCard}
              >
                <div className={styles.cardHeader}>
                  <span className={styles.stepNumber}>{step.stepNumber}</span>
                  <div className={styles.iconWrapper}>{step.icon}</div>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>

                {idx < steps.length - 1 && (
                  <div className={styles.stepArrow}>
                    <ArrowRight size={16} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};