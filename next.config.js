/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.wcbackoffice.com',
				port: '',
				pathname: '/**',
			},
		],
	},
};

module.exports = nextConfig;
