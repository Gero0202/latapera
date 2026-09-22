// components/AboutSection/AboutSection.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { Heart, Users, Flame, Award, Sparkles, Quote, ChefHat } from 'lucide-react';
import styles from '@/app/css/AboutSection.module.css';

interface AboutSectionProps {
    imageSrc?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
    imageSrc = '/about-us2.png', // Reemplazá por la ruta de tu foto
}) => {
    // Variantes para animar la entrada escalonada
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: 'spring', stiffness: 220, damping: 20 },
        },
    };

    const stats = [
        {
            icon: <ChefHat size={22} />,
            value: 'Recetas',
            label: 'Únicas y de autor',
        },
        {
            icon: <Flame size={22} />,
            value: '100%',
            label: 'Sabor Artesanal',
        },
        {
            icon: <Award size={22} />,
            value: 'Pasión',
            label: 'En cada detalle',
        },
    ];

    return (
        <section id="nosotros" className={styles.section}>
            {/* Luces de fondo rústicas */}
            <div className={styles.bgGlowLeft} />
            <div className={styles.bgGlowRight} />

            <div className={styles.container}>
                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {/* Columna Izquierda: Imagen + Badge decorativo */}
                    <motion.div variants={itemVariants} className={styles.imageWrapper}>
                        <div className={styles.imageFrame}>
                            {/* Podés usar <Image /> de Next.js o un <img> tradicional */}
                            <div className={styles.imageContainer}>
                                <Image
                                    src={"/about-us2.jpeg"}
                                    alt="Nuestra historia y nuestros clientes"
                                    fill
                                    className={styles.image}
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority={false}
                                />
                            </div>

                            {/* Tag flotante animado sobre la foto */}
                            <motion.div
                                className={styles.floatingBadge}
                                animate={{ y: [0, -8, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                            >
                                <Heart size={18} className={styles.heartIcon} />
                                <div>
                                    <span className={styles.badgeTitle}>Hecho con amor</span>
                                    <span className={styles.badgeSubtitle}>Para nuestra comunidad</span>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Columna Derecha: Contenido */}
                    <div className={styles.content}>
                        <motion.div variants={itemVariants}>
                            <span className={styles.badge}>
                                <Sparkles size={14} className={styles.badgeIcon} /> SOBRE NOSOTROS
                            </span>
                        </motion.div>

                        <motion.h2 variants={itemVariants} className={styles.title}>
                            Más que una comida, una <span className={styles.highlight}>comunidad</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className={styles.description}>
                            Hay lugares que no necesitan inventar una historia, porque ya nacieron con una. Entre la leña, el horno de barro y la tranquilidad del campo, aprendimos que lo mejor se hace con tiempo. Porque cocinar nunca fue solo hacer pizzas, fue compartir una tradicion.
                            <strong>La Tapera</strong> nace entre hermanos y cuñados y su fuerza para empujar día a día; y así como se gesta desde el origen, queremos que del mismo modo llegue a destino. Por eso nuestros clientes no son solo comensales: son amigos, vecinos y familias que nos eligen día a día para disfrutar el sabor autentico de la masa al horno de barro e ingredientes seleccionados.
                        </motion.p>

                        <motion.p variants={itemVariants} className={styles.description}>
                            Desde el primer día, nuestra misión fue clara: crear un espacio donde la tradición casera se encuentre con la pasión por la buena mesa. Nos llena de orgullo ver cómo nuestra mesa sigue creciendo junto a ustedes.
                        </motion.p>

                        {/* Métrica / Stats Cards */}
                        <motion.div variants={itemVariants} className={styles.statsGrid}>
                            {stats.map((stat, index) => (
                                <div key={index} className={styles.statCard}>
                                    <div className={styles.statHeader}>
                                        <div className={styles.statIcon}>{stat.icon}</div>
                                        <span className={styles.statValue}>{stat.value}</span>
                                    </div>
                                    <span className={styles.statLabel}>{stat.label}</span>
                                </div>
                            ))}
                        </motion.div>

                        {/* Quote / Cita destacada */}
                        <motion.div variants={itemVariants} className={styles.quoteBox}>
                            <Quote size={24} className={styles.quoteIcon} />
                            <p className={styles.quoteText}>
                                «El ingrediente secreto siempre es ver sonreír a quien se sienta a nuestra mesa.»
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};