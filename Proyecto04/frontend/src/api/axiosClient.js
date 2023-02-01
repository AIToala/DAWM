import axios from 'axios';

const baseURL = 'http://localhost:3000/rest/';
const axiosClient = axios.create({
	baseURL: baseURL,
});

/*PARSEAR EL RESPONSE PARA RECIBIR SOLO DATA*/

axiosClient.interceptors.response.use(
	(response) => {
		if (response && response.data) return response.data;
		return response;
	},
	(err) => {
		if (!err.response) {
			return alert(err);
		}
		throw err.response;
	}
);

export default axiosClient;
