import { DataProps } from '@/types/data';

export const searchFilter = (item: DataProps[], search: string) => {
	return item.filter((item: DataProps) => {
		const searchTerm = search.toUpperCase();
		return (
			item.name.toUpperCase().includes(searchTerm) ||
			item.supplier.toUpperCase().includes(searchTerm) ||
			item.info.rtp.toUpperCase().includes(searchTerm) ||
			item.info.version.toUpperCase().includes(searchTerm)
		);
	});
};
