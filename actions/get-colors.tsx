import type { Color } from '@/types';

const URL = `${process.env.NEXT_PUBLIC_API_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
	const res = await fetch(URL, { cache: 'no-store' });

	return await res.json();
};

export default getColors;
