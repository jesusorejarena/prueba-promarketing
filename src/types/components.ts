export interface SearchProps {
	status: string;
	search: string;
	orderRtp: order;
}

type order = 'asc' | 'desc';
