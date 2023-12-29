export default function Card({ className = '', children, ...props }: any) {
	return (
		<div className={`w-[249px] h-[200px] rounded-2xl bg-gray-400 ${className}`} {...props}>
			{children}
		</div>
	);
}
