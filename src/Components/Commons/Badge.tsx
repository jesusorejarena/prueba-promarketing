import React, { ReactNode, HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
	className?: string;
	disabled?: boolean;
	children?: ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className = 'bg-[#FBBF24]/20', disabled = false, children, ...props }) => {
	return (
		<span className={`text-xs p-1 rounded-md text-white truncate font-bold uppercase ${className}`} {...props}>
			{children}
		</span>
	);
};

export default Badge;
