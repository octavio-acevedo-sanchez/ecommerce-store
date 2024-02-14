import Link from 'next/link';
import Container from '@/components/ui/container';
import MainNav from '@/components/main-nav';
import NavbarActions from './navbar-actions';
import getCategories from '@/actions/get-categories';

const Navbar = async (): Promise<JSX.Element> => {
	const categories = await getCategories();

	return (
		<div className='border-6'>
			<Container>
				<div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
					<Link href='/' className='ml-4 flex lg:ml-0 gap-x-2'>
						<p className='font-bold text-xl'>STORE</p>
					</Link>
					<MainNav data={categories} />
					<NavbarActions />
				</div>
			</Container>
		</div>
	);
};

export default Navbar;
