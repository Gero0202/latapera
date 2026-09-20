// components/MenuSection/MenuSection.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Flame,
  Tag,
  Wine,
  Sparkles,
  Plus,
  Beer,
  CupSoda,
  GlassWater,
  Percent,
} from 'lucide-react';
import styles from '@/app/css/MenuSection.module.css';

export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: string;
  category: 'pizzas' | 'promos' | 'bebidas';
  subCategory?: 'gaseosas' | 'cervezas' | 'vinos';
  badge?: string;
}

interface MenuSectionProps {
  items: MenuItem[];
}

export const MenuSection: React.FC<MenuSectionProps> = ({ items }) => {
  const [drinkTab, setDrinkTab] = useState<'todos' | 'gaseosas' | 'cervezas' | 'vinos'>('todos');

  const pizzas = items.filter((i) => i.category === 'pizzas');
  const promos = items.filter((i) => i.category === 'promos');
  const bebidas = items.filter((i) => i.category === 'bebidas');

  const filteredBebidas =
    drinkTab === 'todos'
      ? bebidas
      : bebidas.filter((b) => b.subCategory === drinkTab);

 return (
    <section id="menu" className={styles.section}>
      {/* Resplandores de luz cálida de fondo */}
      <div className={styles.bgGlowLeft} />
      <div className={styles.bgGlowRight} />

      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.topBadge}>Nuestra Selección</span>
          <h2 className={styles.mainTitle}>LA CARTA</h2>
          <p className={styles.mainSubtitle}>
            Masa madre fermentada por 48 hs, horneada al quebracho colorado
          </p>
        </div>

        {/* 1. SECCIÓN PIZZAS */}
        <div id="menu-pizzas" className={styles.categoryBlock}>
          <div className={styles.categoryHeader}>
            <div className={styles.catIconWrapper}>
              <Flame size={18} />
            </div>
            <h3>Pizzas</h3>
          </div>

          <div className={styles.itemsList}>
            {pizzas.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: (index % 3) * 0.08,
                }}
                whileTap={{ scale: 0.98 }}
                className={styles.itemCard}
              >
                <div className={styles.accentBorder} />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <div className={styles.titleGroup}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      {item.badge && (
                        <span className={styles.badge}>
                          <Sparkles size={10} /> {item.badge}
                        </span>
                      )}
                    </div>
                    <div className={styles.priceChip}>${item.price}</div>
                  </div>
                  {item.description && (
                    <p className={styles.itemDesc}>{item.description}</p>
                  )}
                  <div className={styles.cardFooter} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2. SECCIÓN PROMOS ESPECIALES */}
        <div id="menu-promos" className={styles.categoryBlock}>
          <div className={styles.categoryHeader}>
            <div className={styles.catIconWrapperPromo}>
              <Tag size={18} />
            </div>
            <h3>Promociones Especiales</h3>
          </div>

          <div className={styles.promosGrid}>
            {promos.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{
                  type: 'spring',
                  stiffness: 240,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileTap={{ scale: 0.98 }}
                className={styles.promoCard}
              >
                <div className={styles.promoTagHeader}>
                  <Percent size={12} /> PROMO DESTACADA
                </div>

                <div className={styles.promoBody}>
                  <div className={styles.promoTitleGroup}>
                    <h4 className={styles.promoName}>{item.name}</h4>
                    {item.badge && (
                      <span className={styles.promoBadge}>{item.badge}</span>
                    )}
                  </div>

                  {item.description && (
                    <p className={styles.promoDesc}>{item.description}</p>
                  )}

                  <div className={styles.promoFooter}>
                    <span className={styles.promoPriceLabel}>Precio Combo</span>
                    <div className={styles.promoPriceChip}>${item.price}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3. SECCIÓN BEBIDAS */}
        <div id="menu-bebidas" className={styles.categoryBlock}>
          <div className={styles.categoryHeader}>
            <div className={styles.catIconWrapper}>
              <Wine size={18} />
            </div>
            <h3>Bebidas & Cervezas</h3>
          </div>

          <div className={styles.drinkTabs}>
            <button
              onClick={() => setDrinkTab('todos')}
              className={`${styles.tabBtn} ${drinkTab === 'todos' ? styles.activeTab : ''}`}
            >
              Todas
            </button>
            <button
              onClick={() => setDrinkTab('gaseosas')}
              className={`${styles.tabBtn} ${drinkTab === 'gaseosas' ? styles.activeTab : ''}`}
            >
              <CupSoda size={14} /> Gaseosas
            </button>
            <button
              onClick={() => setDrinkTab('cervezas')}
              className={`${styles.tabBtn} ${drinkTab === 'cervezas' ? styles.activeTab : ''}`}
            >
              <Beer size={14} /> Cervezas
            </button>
            <button
              onClick={() => setDrinkTab('vinos')}
              className={`${styles.tabBtn} ${drinkTab === 'vinos' ? styles.activeTab : ''}`}
            >
              <GlassWater size={14} /> Vinos
            </button>
          </div>

          <div className={styles.drinksGrid}>
            <AnimatePresence mode="wait">
              {filteredBebidas.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileTap={{ scale: 0.98 }}
                  className={styles.drinkCard}
                >
                  <div className={styles.drinkInfo}>
                    <span className={styles.drinkName}>{item.name}</span>
                    {item.description && (
                      <span className={styles.drinkDesc}>{item.description}</span>
                    )}
                  </div>
                  <div className={styles.drinkPrice}>${item.price}</div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};