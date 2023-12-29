import React, { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	disabled?: boolean;
	children?: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className = '', disabled = false, children, ...props }) => {
	return (
		<button
			className={`${
				disabled
					? 'bg-[#E8E8E8] text-[#909090] cursor-auto'
					: 'bg-[#FBBF24]/60 hover:bg-yellow-500 cursor-pointer text-white'
			} rounded-lg text-[12px] px-5 font-bold uppercase w-[140px] h-[30px] mt-5 z-50 ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
