import { useEffect, useState } from 'react';
import Papa from 'papaparse';
import { MenuItem } from '../component/MenuSection';

const GOOGLE_SHEETS_CSV_URL = process.env.MENU_SHEET_URL || '';

export const useMenuData = () => {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch(GOOGLE_SHEETS_CSV_URL);
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          skipEmptyLines: true,
          complete: (results) => {
            const parsedItems: MenuItem[] = results.data
              .filter((row: any) => {
                const dispKey = Object.keys(row).find((k) =>
                  k.trim().toLowerCase().includes('disponible')
                );
                const disp = dispKey ? row[dispKey] : '';
                return disp.toString().trim().toUpperCase() === 'DISPONIBLE';
              })
              .map((row: any) => {
                const subCategoryKey = Object.keys(row).find((key) =>
                  key.trim().toLowerCase().includes('subcat')
                );

                const rawSub = subCategoryKey && row[subCategoryKey]
                  ? row[subCategoryKey].toString().trim().toLowerCase()
                  : '';

                let cleanSubCategory: 'gaseosas' | 'cervezas' | 'vinos' | undefined = undefined;

                if (rawSub.includes('gaseosa')) cleanSubCategory = 'gaseosas';
                else if (rawSub.includes('cerveza')) cleanSubCategory = 'cervezas';
                else if (rawSub.includes('vino')) cleanSubCategory = 'vinos';

                const nameKey = Object.keys(row).find((k) => k.trim().toLowerCase().includes('nombre') || k.trim().toLowerCase() === 'name') || 'nombre';
                const descKey = Object.keys(row).find((k) => k.trim().toLowerCase().includes('descripcion') || k.trim().toLowerCase().includes('description')) || 'descripcion';
                const priceKey = Object.keys(row).find((k) => k.trim().toLowerCase().includes('precio') || k.trim().toLowerCase() === 'price') || 'precio';
                const catKey = Object.keys(row).find((k) => k.trim().toLowerCase().includes('categoria') || k.trim().toLowerCase() === 'category') || 'categoria';

                return {
                  id: String(row.id || row.Id || '').trim(),
                  name: (row[nameKey] || '').toString().trim(),
                  description:
                    row[descKey] && row[descKey].trim() !== ''
                      ? row[descKey].trim()
                      : undefined,
                  price: (row[priceKey] || '0').toString().trim(),
                  category: (row[catKey] || 'pizzas')
                    .toString()
                    .trim()
                    .toLowerCase() as MenuItem['category'],
                  subCategory: cleanSubCategory,
                  badge: row.badge && row.badge.trim() !== '' ? row.badge.trim() : undefined,
                };
              });

            setItems(parsedItems);
            setLoading(false);
          },
        });
      } catch (err) {
        console.error('Error al cargar el menú:', err);
        setError('No se pudo cargar la carta.');
        setLoading(false);
      }
    };

    if (GOOGLE_SHEETS_CSV_URL) {
      fetchMenu();
    } else {
      setError('Falta configurar la URL de Google Sheets.');
      setLoading(false);
    }
  }, []);

  return { items, loading, error };
};