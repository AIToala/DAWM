import axiosClient from './axiosClient';

const customersApi = {
    getAllCustomers: () => axiosClient.get('customers/findAll/json'),
    getCustomer: (id) => axiosClient.get(`customers/${id}`),
    createCustomer: (data) => axiosClient.post('customers', data),
    updateCustomer: (id, data) => axiosClient.put(`customers/${id}`, data),
    deleteCustomer: (id) => axiosClient.delete(`customers/${id}`),
};

export default customersApi;
