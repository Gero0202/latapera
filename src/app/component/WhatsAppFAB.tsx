'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import styles from '@/app/css/WhatsAppFAB.module.css';
import { FaWhatsapp } from 'react-icons/fa';

interface FABProps {
  whatsappNumber: string;
}

export const WhatsAppFAB: React.FC<FABProps> = ({ whatsappNumber }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 350) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          initial={{ scale: 0, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0, opacity: 0, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
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
      )}
    </AnimatePresence>
  );
};