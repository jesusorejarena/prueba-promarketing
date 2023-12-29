export interface InfoProps {
	moodBonus: boolean;
	rtp: string;
	version: string;
}

export interface DataProps {
	id: number;
	disabled: boolean;
	info: InfoProps;
	name: string;
	src: string;
	supplier: string;
}
