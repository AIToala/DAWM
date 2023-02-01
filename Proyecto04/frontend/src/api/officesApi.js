import axiosClient from './axiosClient';

const officesApi = {
	getAllOffices: () => axiosClient.get('offices/findAll/json'),
	getOffice: (id) => axiosClient.get(`offices/${id}`),
	createOffice: (data) => axiosClient.post('offices', data),
	updateOffice: (id, data) => axiosClient.put(`offices/${id}`, data),
	deleteOffice: (id) => axiosClient.delete(`offices/${id}`),
};

export default officesApi;
