import axios from '@/config/axios';

export const getAllDataAPI = async () => {
	const response = await axios.get(`promarketing`);

	return response.data;
};
