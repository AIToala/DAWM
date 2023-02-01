import axiosClient from './axiosClient';

const totalSalesApi = {
    getTotalSales: () => axiosClient.get('totalSales'),
    calculateTotalSales: (data) => axiosClient.post('totalSales', data).then((res) => res.data).catch((err) => console.log(err)),
};

export default totalSalesApi;
