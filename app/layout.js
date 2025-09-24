import "@/node_modules/react-modal-video/css/modal-video.css";
import "public/assets/css/style.css";
import "public/assets/css/responsive.css";

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/free-mode';
import { niconne, poppins, tangerine } from '@/lib/font';

export const metadata = {
  title: 'Voice of Jesus Ministries',
  description: 'Voice of Jesus Ministrieswebsite',
  icons: {
    icon: [
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  themeColor: '#ffffff',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${niconne.variable} ${poppins.variable} ${tangerine.variable}`}>
      <body>{children}</body>
    </html>
  );
}
