import { axiosInstance } from "../config/axios";

const getProductsDataApi = async() => {
	try {
		const response = await axiosInstance.get('products');
		console.log("Response inside api call =>", response.data);
		return response.data;
	} catch(e) {
		console.log("Error while fetching products -", e);
	}
}

export {getProductsDataApi};

// const getProductsDataByCategoryApi = async(category) => {
// 	try {
// 		const response = await axiosInstance.get(`products/category/${category}`);
// 		console.log("Response inside api call =>", response.data);
// 		return response.data;
// 	} catch(e) {
// 		console.log("Error while fetching products by category -", e);
// 	}
// }

// export {getProductsDataApi, getProductsDataByCategoryApi};