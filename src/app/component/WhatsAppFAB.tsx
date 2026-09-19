// components/WhatsAppFAB/WhatsAppFAB.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import styles from '@/app/css/WhatsAppFAB.module.css';
import { FaWhatsapp } from 'react-icons/fa';

interface FABProps {
  whatsappNumber: string;
}

export const WhatsAppFAB: React.FC<FABProps> = ({ whatsappNumber }) => {
  return (
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.9 }}
      href={`https://wa.me/${whatsappNumber}?text=¡Hola!%20Quiero%20hacer%20un%20pedido`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label="Pedir por WhatsApp"
    >
      <FaWhatsapp size={22} />
      <span className={styles.label}>Pedir</span>
    </motion.a>
  );
};