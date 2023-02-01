import React from 'react';
import {
	Text,
	Stack,
	Divider,
	Select,
	Table,
	Loader,
} from '@mantine/core';
import { useEffect, useState } from 'react';
import customersApi from '../../api/customersApi';
import totalSalesApi from '../../api/totalSalesApi';

import axios from 'axios';

const Reports = () => {
	const [customers, setCustomers] = useState([]);
	const [customerSelected, setCustomerSelected] = useState("");
	const [salesFiltered, setSalesFiltered] = useState([]);
	const [sales, setSales] = useState([]);
	const [products, setProducts] = useState([]);
	const [total, setTotal] = useState(null);

	const fetchCustomers = async () => {
		try{
			const res = await customersApi.getAllCustomers();
			const data = res.map((customer) => ({
				label: customer.customerName,
				value: customer.customerNumber,
			}));
			data.sort((a, b) => {
				if (a.label < b.label) return -1;
				if (a.label > b.label) return 1;
				return 0;
			});
			
			setCustomers(data);
		} catch (error) {
			console.log(error);
		}
	};
	const calculateSubtotal = (price, quantity) => {
		let subtotal = parseFloat(price) * parseFloat(quantity);
		return subtotal.toFixed(2);
	};

	const fetchSalesReport = async (customer) => {
		if (customer === undefined || customer == "" || customer == null) return;
		console.log(customer);
		try{
			setCustomerSelected(customer);
			let res = await fetch("https://ventas-558a8-default-rtdb.firebaseio.com/sales.json")
			.then((res) => res.json());
			let res2 = res
			let filteredSales = res2.filter((sale) => sale.customerNumber == customer && sale.status == "Shipped").sort((a, b) => {
				if (a.orderNumber === b.orderNumber) {
					return a.orderLineNumber - b.orderLineNumber;
				}
				return a.orderNumber - b.orderNumber;
			});
			let sales = res.filter(sale => sale.customerNumber == customer).sort((a, b) => {
				if (a.orderNumber === b.orderNumber) {
					return a.orderLineNumber - b.orderLineNumber;
				}
				return a.orderNumber - b.orderNumber;
			});
			setSalesFiltered(filteredSales);
			setSales(sales)
			sendSales(filteredSales);
			fetchProducts(sales);
			fetchTotalSales();
		} catch (error) {
			console.log(error);
		}
	};
	const fetchTotalSales = async () => {
		try{
			const res = await axios.get("http://localhost:3000/totalSales").then((res) => res.data)
			console.log(res.total);
			setTotal(res.total);
		} catch (error) {
			console.log(error);
		}
	};
	

	const sendSales = async (sales)=>{
		const salesToSend = [];
		sales.forEach((sale) => {
			salesToSend.push({
				priceEach: sale.priceEach,
				quantityOrdered: sale.quantityOrdered,
			});
		});
		try{
			await axios.post("http://localhost:3000/totalSales", salesToSend);
		}catch(error){
			console.log(error);
		}
	}
	
	const fetchProducts = (sales) => {
		const products = [];
		sales.forEach((sale) => {
			const product = products.find((product) => product.productCode === sale.productCode);
			if (product === undefined) {
				products.push({
					orderNumber: sale.orderNumber,
					orderLineNumber: sale.orderLineNumber,
					productCode: sale.productCode,
					productName: sale.productName,
					productDescription: sale.productDescription,
					quantityInStock: sale.quantityInStock,
					quantityOrdered: sale.quantityOrdered,
					requiredDate: sale.requiredDate,
					shippedDate: sale.shippedDate,
					status: sale.status
				});
			}
		});
		setProducts(products);
	};

	
	useEffect(() => {
		fetchCustomers();
		fetchSalesReport();
	}, []);
	return (
		<Stack sx={(theme) => ({gap: '4rem', margin: '2rem',})}>
			<Text fw={700} fz="42px">Sales Report</Text>
			<Divider />
			<Select label="Select Customer" placeholder="Select Customer" data={customers} 
				dropdownPosition="bottom"
				styles={(theme) => ({
					width: '100%',
					item: {
					'&[data-selected]': {
						'&, &:hover': {
						backgroundColor:
							theme.colorScheme === 'dark' ? theme.colors.teal[9] : theme.colors.teal[1],
						color: theme.colorScheme === 'dark' ? theme.white : theme.colors.teal[9],
						},
					},
					'&[data-hovered]': {},
					},
				})}
				onChange={(event) => fetchSalesReport(event)}
				value={customerSelected}
			></Select>
			<Stack>
				<Text fw={700} fz="32px">Sales</Text>
				<Divider />
				{sales.length !== 0 ? (
					<Table className="tableOrdersShipped">
						<thead>
							<tr>
								<th>Customer Number</th>
								<th>Order Number</th>
								<th>Order Line Number</th>
								<th>Order Date</th>
								<th>Required Date</th>
								<th>Shipped Date</th>
								<th>Comments</th>
								<th>Product Code</th>
								<th>Quantity Ordered</th>
								<th>Price Each</th>
								<th>Total</th>
							</tr>
						</thead>
						<tbody>
							{sales.map((sale, index) => (
								<tr key={index}>
									<td>{sale.customerNumber}</td>
									<td>{sale.orderNumber}</td>
									<td>{sale.orderLineNumber}</td>
									<td>{sale.orderDate}</td>
									<td>{sale.requiredDate}</td>
									<td>{sale.shippedDate}</td>
									<td>{sale.comments}</td>
									<td>{sale.productCode}</td>
									<td>{sale.quantityOrdered}</td>
									<td>${sale.priceEach}</td>
									<td>${calculateSubtotal(sale.priceEach, sale.quantityOrdered)}</td>
								</tr>
							))}
						</tbody>
						<tfoot>
							<tr>
								<td colSpan="10">Total</td>
								<td>${total}</td>
							</tr>										
						</tfoot>
					</Table>
				) : (
					<Text>No sales found</Text>
				)}
			</Stack>
			<Stack>
				<Text fw={700} fz="32px">Products</Text>
				<Divider />
				{products.length !== 0 ? (
					<Table className='tableProducts'>
						<thead>
							<tr>
								<th>Order Number</th>
								<th>Order Line Number</th>
								<th>Product Code</th>
								<th>Product Name</th>
								<th>Product Description</th>
								<th>Quantity in Stock</th>
								<th>Quantity Ordered</th>
								<th>Required Date</th>
								<th>Ship Date</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{products.map((product, index) => (
								<tr key={index}>
									<td>{product.orderNumber}</td>
									<td>{product.orderLineNumber}</td>
									<td>{product.productCode}</td>
									<td>{product.productName}</td>
									<td>{product.productDescription}</td>
									<td>{product.quantityInStock}</td>
									<td>{product.quantityOrdered}</td>
									<td>{product.requiredDate}</td>
									<td>{product.shippedDate}</td>
									<td>{product.status}</td>
								</tr>
							))}
						</tbody>
					</Table>
				) : (
					<Text>No products found</Text>
				)}
			</Stack>
		</Stack>
	);
};

export default Reports;
