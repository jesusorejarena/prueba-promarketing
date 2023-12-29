import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Prueba tecnica',
	description: 'Prueba tecnica para promarketing',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title className="notranslate">{process.env.NEXT_PUBLIC_APP_TITLE}</title>
			</head>
			<body className={inter.className}>
				<Toaster richColors />
				{children}
			</body>
		</html>
	);
}