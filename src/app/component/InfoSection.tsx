// components/InfoSection/InfoSection.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  Bike, 
  Copy, 
  Check, 
  Navigation, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { BsInstagram } from 'react-icons/bs';
import styles from '@/app/css/Infosection.module.css';

interface InfoProps {
  address: string;
  hours: string;
  deliveryTypes: string[];
  instagramUser: string;
}

/**
 * Función auxiliar para verificar si el local está abierto ahora mismo.
 * Horario: Martes a Domingo de 18:00 a 22:00 hs.
 */
const checkIsOpen = (): boolean => {
  const now = new Date();
  const day = now.getDay(); // 0 = Domingo, 1 = Lunes, 2 = Martes, ..., 6 = Sábado
  const hour = now.getHours();

  // Lunes (day === 1) -> Cerrado todo el día
  if (day === 1) return false;

  // Martes a Domingo -> Abierto de 18:00 a 22:00 (18 a 21:59)
  return hour >= 18 && hour < 22;
};

export const InfoSection: React.FC<InfoProps> = ({
  address,
  hours,
  deliveryTypes = [],
  instagramUser,
}) => {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Verificamos el estado al cargar el componente
  useEffect(() => {
    setIsOpen(checkIsOpen());
  }, []);

 // 1. Reemplazá la URL del mapa embebido (mapEmbedUrl):
const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204.42877758356175!2d-57.94501960409258!3d-34.93503687581366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e9e5cb24676b%3A0x9e4cef9dff70d45b!2sLa%20Tapera!5e0!3m2!1ses-419!2sar!4v1789853488232!5m2!1ses-419!2sar";

// 2. Reemplazá el enlace directo para el botón "Cómo llegar" (directMapUrl):
const directMapUrl = "https://www.google.com/maps/search/?api=1&query=-34.93503687581366,-57.94501960409258";

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 260, damping: 20 },
    },
  };

  return (
    <section id="contacto" className={styles.section}>
      {/* Resplandores rústicos de fondo */}
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowRight} />

      <div className={styles.container}>
        {/* Header Animado */}
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.badge}>
            <Sparkles size={14} className={styles.badgeIcon} /> VISITANOS & PEDÍ
          </span>
          <h2 className={styles.title}>¿Dónde nos encontrás?</h2>
          <p className={styles.subtitle}>
            Vení a vivir la experiencia o recibí tu pedido en la puerta de tu casa.
          </p>
        </motion.div>

        {/* Grilla Principal */}
        <motion.div 
          className={styles.gridContainer}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Card 1: Ubicación */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardAddress}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${styles.iconWarm}`}>
                <MapPin size={22} />
              </div>
              <button 
                onClick={handleCopyAddress} 
                className={styles.copyBtn}
                title="Copiar dirección"
              >
                {copied ? <Check size={15} className={styles.checkIcon} /> : <Copy size={15} />}
                <span>{copied ? '¡Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            
            <div className={styles.cardBody}>
              <h3>Ubicación</h3>
              <p className={styles.addressText}>{address}</p>
            </div>

            <a 
              href={directMapUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.actionBtn}
            >
              <Navigation size={15} /> Cómo llegar
            </a>
          </motion.div>

          {/* Card 2: Horarios + Live Badge */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardHours}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${styles.iconWarm}`}>
                <Clock size={22} />
              </div>
              <div className={`${styles.statusBadge} ${isOpen ? styles.open : styles.closed}`}>
                <span className={styles.statusDot} />
                {isOpen ? 'Abierto Ahora' : 'Cerrado'}
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3>Horarios</h3>
              <p className={styles.hoursText}>{hours}</p>
            </div>
          </motion.div>

          {/* Card 3: Modalidades */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardDelivery}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${styles.iconWarm}`}>
                <Bike size={22} />
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3>Servicios</h3>
              <div className={styles.pillsContainer}>
                {deliveryTypes.map((type, idx) => (
                  <motion.span 
                    key={idx} 
                    className={styles.pill}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {type}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Card 4: Instagram */}
          <motion.div variants={itemVariants} className={`${styles.card} ${styles.cardInstagram}`}>
            <div className={styles.cardHeader}>
              <div className={`${styles.iconBox} ${styles.iconWarm}`}>
                <BsInstagram size={20} />
              </div>
            </div>

            <div className={styles.cardBody}>
              <h3>Instagram</h3>
              <p className={styles.igSubtitle}>Enterate de novedades y promos en nuestras redes.</p>
            </div>

            <a
              href={`https://www.instagram.com/latapera.pizzeria/`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.igBtn}
            >
              @{instagramUser.replace('@', '')} <ExternalLink size={14} />
            </a>
          </motion.div>

          {/* Mapa Interactivo */}
          <motion.div variants={itemVariants} className={styles.mapWrapper}>
            <iframe
              title="Google Maps Location"
              src={mapEmbedUrl}
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen
            />
            <div className={styles.mapOverlayHint}>
              <span>🗺️ Mapa Interactivo</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};