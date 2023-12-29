import axios from 'axios';

export default axios.create({
	baseURL: process.env.NEXT_PUBLIC_APP_URL_BACKEND,
	headers: {
		'Content-Type': 'multipart/form-data',
	},
});
