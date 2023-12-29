'use client';

import Card from '@/Components/Commons/Card';
import { getAllDataAPI } from '@/api/data';
import { DataProps } from '@/types/data';
import { useEffect, useState } from 'react';
import CardImage from '@/Components/CardImage';
import Button from '@/Components/Commons/Button';
import { toast } from 'sonner';
import { searchFilter } from '@/utils/search';
import _ from 'lodash';
import { SearchProps } from '@/types/components';

export default function Home() {
	const [data, setData] = useState<DataProps[]>([]);
	const [dataCopy, setDataCopy] = useState<DataProps[]>([]);
	const [buttonInfo, setButtonInfo] = useState<boolean>(false);

	const [search, setSearch] = useState<SearchProps>({
		status: '',
		search: '',
		orderRtp: 'asc',
	});

	useEffect(() => {
		const effect = async () => {
			try {
				const response: any = await getAllDataAPI();

				setData(response);
				setDataCopy(response);
			} catch (error) {
				toast.error('Error loading data');
			}
		};

		effect();
	}, []);

	const switchStatus = () => {
		if (search.status === '') setSearch({ ...search, status: 'true' });
		if (search.status === 'true') setSearch({ ...search, status: 'false' });
		if (search.status === 'false') setSearch({ ...search, status: '' });
	};

	const switchOrder = () => {
		if (search.orderRtp === 'asc') setSearch({ ...search, orderRtp: 'desc' });
		if (search.orderRtp === 'desc') setSearch({ ...search, orderRtp: 'asc' });
	};

	useEffect(() => {
		let newDataCopy = [...data];

		if (search.search !== '') {
			newDataCopy = searchFilter(newDataCopy, search.search);
		}

		if (search.status !== '') {
			newDataCopy = newDataCopy.filter((item) => item.disabled === (search.status === 'true'));
		}

		const orderRtp = search.orderRtp || 'asc';

		newDataCopy = _.orderBy(newDataCopy, ['info.rtp'], [orderRtp]);

		setDataCopy(newDataCopy);
	}, [data, search]);

	return (
		<div className="mt-5">
			<div className="flex flex-col items-center">
				<h2 className="text-3xl font-bold mb-10">Information</h2>
				<div className="flex flex-row justify-between items-center space-x-10">
					<div className="text-xl font-medium">Filter searchs:</div>

					<div className="flex space-x-4">
						<div className="flex w-full space-x-4">
							<Button
								onClick={switchStatus}
								className="min-w-[180px] !max-w-full !h-auto rounded-xl !bg-[#091B50] hover:!bg-[#1f2e5c] !mt-0"
							>
								Status: {search.status === '' ? 'All' : search.status === 'true' ? 'Disabled' : 'Active'}
							</Button>
							<Button
								onClick={switchOrder}
								className="min-w-[180px] !max-w-full !h-auto rounded-xl !bg-[#091B50] hover:!bg-[#1f2e5c] !mt-0"
							>
								Order RTP: {search.orderRtp === 'asc' ? 'asc' : 'desc'}
							</Button>
						</div>
						<input
							type="text"
							value={search.search}
							onChange={(e) => setSearch({ ...search, search: e.target.value })}
							id="search"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 min-w-[300px]"
							placeholder="Name, Supplier, Rtp and Version"
						/>
					</div>
				</div>

				<div className={`grid grid-cols-2 lg:grid-cols-4 gap-10 mt-14`}>
					{dataCopy.length > 0 ? (
						dataCopy.map((item: DataProps, index) => (
							<Card key={index} className="group relative overflow-hidden" onMouseOut={() => setButtonInfo(false)}>
								<CardImage item={item} buttonInfo={buttonInfo} setButtonInfo={setButtonInfo} />
							</Card>
						))
					) : (
						<p>No se encontraron resultados...</p>
					)}
				</div>
			</div>
		</div>
	);
}
