'use client';

import { useEffect, useState } from 'react';
import Button from '@/components/ui/button';
import { ShoppingBag } from 'lucide-react';
import useCart from '@/hooks/use-cart';
import { useRouter } from 'next/navigation';

const NavbarActions = (): React.ReactNode => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const router = useRouter();
	const cart = useCart();

	if (!isMounted) {
		return null;
	}

	return (
		<div className='ml-auto flex items-center gap-x-4'>
			<Button
				className='flex items-center roundex-full bg-black px-4 py-2'
				onClick={() => {
					router.push('/cart');
				}}
			>
				<ShoppingBag size={20} color='white' />
				<span className='ml-2 text-sm font-medium text-white'>
					{cart.items.length}
				</span>
			</Button>
		</div>
	);
};

export default NavbarActions;
