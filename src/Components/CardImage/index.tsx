'use client';

import { DataProps } from '@/types/data';
import Image from 'next/image';
import ICircleInfo from '@/assets/icons/circle-info.svg';
import IGift from '@/assets/icons/gift.svg';
import Button from '@/Components/Commons/Button';
import Badge from '@/Components/Commons/Badge';
import { imagesLogo } from '@/constants/imagesLogo';
import { useState } from 'react';

interface CardImageProps {
	item: DataProps;
	buttonInfo: boolean;
	setButtonInfo: any;
}

export default function CardImage({ item, buttonInfo, setButtonInfo }: CardImageProps) {
	const [pressButton, setPressButton] = useState<boolean>(false);

	return (
		<>
			<div className="flex w-full h-full">
				<Image src={item.src} alt="Images" loading="lazy" className="object-cover" fill />
			</div>

			<div className={`flex flex-row absolute inset-0 p-2 items-start justify-between ${!item.disabled && 'z-50'}`}>
				<Badge className="bg-[#010101]/80">
					<Image
						src={imagesLogo[item.supplier]}
						alt="Images"
						loading="lazy"
						className="object-cover opacity-100"
						height={15}
					/>
				</Badge>

				{!buttonInfo && !item.disabled && (
					<Badge className="bg-[#010101]/80 cursor-pointer" onClick={() => setButtonInfo(true)}>
						<Image src={ICircleInfo} alt="Images" loading="lazy" className="object-cover opacity-100" height={15} />
					</Badge>
				)}
			</div>

			{item.info.moodBonus && !buttonInfo && !item.disabled && (
				<div className={`flex flex-row inset-0 p-2 z-40 items-end justify-end absolute py-2 mb-2`}>
					<Badge className="bg-[#010101]/80 transition-transform group-hover:bg-[#FBBF24]/20 !p-0 !pt-1">
						<Image src={IGift} alt="Images" loading="lazy" className="rounded-md" height={20} />
					</Badge>
				</div>
			)}

			<div
				className={`flex flex-col absolute inset-0 items-center ${
					buttonInfo ? 'justify-end' : item.disabled || pressButton ? 'justify-center' : 'justify-between'
				} ${
					item.disabled
						? 'bg-black/70 z-50'
						: 'opacity-0 group-hover:opacity-100 group-hover:bg-black/70 transition-opacity'
				} py-2`}
			>
				<div />

				{!buttonInfo && (
					<Button
						onMouseDown={() => setPressButton(true)}
						onMouseUp={() => setPressButton(false)}
						disabled={item.disabled}
					>
						{item.disabled ? 'No disponible' : 'Jugar ahora'}
					</Button>
				)}

				{!item.disabled && !pressButton ? (
					<div className="flex items-start justify-start w-full px-2">
						<div className={`${!item.info.moodBonus || buttonInfo ? 'w-[100%]' : 'w-[80%]'} z-40`}>
							<p className={`text-white text-lg truncate font-extrabold`}>{item.name}</p>
						</div>
					</div>
				) : (
					<div className='p-3.5' />
				)}

				{buttonInfo && (
					<div className="flex flex-row inset-0 p-2 z-40 items-end justify-between">
						{buttonInfo && (
							<div className="flex flex-wrap gap-1">
								<Badge>Version: {item.info.version}</Badge>
								<Badge>RTP: {item.info.rtp}</Badge>
								<Badge>Votalidad: {item.info.moodBonus ? 'Alta' : 'Baja'}</Badge>
							</div>
						)}

						<Badge className="cursor-pointer" onClick={() => setButtonInfo(false)}>
							<Image src={ICircleInfo} alt="Images" loading="lazy" className="object-cover opacity-100" height={24} />
						</Badge>
					</div>
				)}
			</div>
		</>
	);
}
