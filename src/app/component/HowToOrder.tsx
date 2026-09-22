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
      desc: 'Todo listo para compartir.',
    },
  ];

  return (
    <section id="como-pedir" className={styles.container}>
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowRight} />

      <div className={styles.innerContainer}>
        <div className={styles.headerGroup}>
          <span className={styles.topBadge}>
            <Sparkles size={14} className={styles.badgeIcon} /> PASO A PASO
          </span>
          <h2 className={styles.title}>¿CÓMO PEDIR?</h2>
          <p className={styles.subtitle}>
            Elegí tu variedad, escribinos por WhatsApp y disfrutá del auténtico sabor a leña.
          </p>
        </div>

        <div className={styles.stepsWrapper}>
          <div className={styles.stepsGrid}>
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: idx * 0.12,
                  ease: [0.215, 0.61, 0.355, 1], // easeOutCubic: ultra fluido
                }}
                whileHover={{ y: -6, transition: { duration: 0.2, ease: 'easeOut' } }}
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