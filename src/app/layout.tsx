import "./globals.css";
import "./../../public/css/landing.css"
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Miguel Velasco | Portafolio",
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        url: '/favicon.ico',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/favicon.ico',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="flex min-h-screen flex-col items-center justify-center text-white">
        {children}
      </body>
    </html>
  );
}
