import axiosClient from './axiosClient';

const employeesApi = {
    getAllEmployees: () => axiosClient.get('employees/findAll/json'),
    getEmployee: (id) => axiosClient.get(`employees/${id}`),
    createEmployee: (data) => axiosClient.post('employees', data),
    updateEmployee: (id, data) => axiosClient.put(`employees/${id}`, data),
    deleteEmployee: (id) => axiosClient.delete(`employees/${id}`),
};

export default employeesApi;
