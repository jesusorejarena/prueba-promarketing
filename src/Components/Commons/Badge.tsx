export default function Badge({ className = 'bg-[#FBBF24]/20', disabled = false, children, ...props }: any) {
	return (
		<span className={`text-xs p-1 rounded-md text-white truncate font-bold uppercase ${className}`} {...props}>
			{children}
		</span>
	);
}
