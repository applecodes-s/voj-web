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
    description: 'A React/Next.js website for Foodily',
    icons: [
        { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
        { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
        { rel: "apple-touch-icon", sizes: "180x180", url: "/apple-touch-icon.png" },
        { rel: "shortcut icon", url: "/favicon.ico" }
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${niconne.variable} ${poppins.variable} ${tangerine.variable}`}>
            <body>
                {children}

                {/* Add manifest and theme-color manually */}
                <link rel="manifest" href="/site.webmanifest" />
                <meta name="theme-color" content="#ffffff" />
            </body>
        </html>
    );
}
