import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';

const font = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Hobbies and Toys Store',
	description:
		'Official Mattel and Hasbro distributor 💻 Online Store / National Shipping - Physical stores'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>): React.ReactNode {
	return (
		<html lang='en'>
			<body className={font.className}>
				<ModalProvider />
				<ToastProvider />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
