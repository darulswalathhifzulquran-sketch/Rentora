import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Rentora | Premium Property Management', description: 'Manage Properties. Master Every Detail.' };
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}</body></html>; }
