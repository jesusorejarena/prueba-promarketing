import React, { ReactNode, HTMLProps } from 'react';

interface CardProps extends HTMLProps<HTMLDivElement> {
	children?: ReactNode;
}

const Card: React.FC<CardProps> = ({ className = '', children, ...props }) => {
	return (
		<div className={`w-[249px] h-[200px] rounded-2xl bg-gray-400 ${className}`} {...props}>
			{children}
		</div>
	);
};

export default Card;
