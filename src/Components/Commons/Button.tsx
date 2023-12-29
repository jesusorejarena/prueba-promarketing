export default function Button({ className = '', disabled = false, children, ...props }: any) {
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
}
