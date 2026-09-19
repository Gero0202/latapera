// app/layout.tsx
import './globals.css';
import { Cinzel_Decorative, Montserrat } from 'next/font/google';

const rusticFont = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-rustic',
});

const bodyFont = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
});

export const metadata = {
  title: 'La Tapera | Pizzería de Horno de Barro',
  description: 'El campo en tu mesa. Pizzas a la leña en horno de barro.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${rusticFont.variable} ${bodyFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}