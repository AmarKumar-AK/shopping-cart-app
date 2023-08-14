import { axiosInstance } from "../config/axios";

const getCategoriesDataApi = async() => {
	try {
		const response = await axiosInstance.get('categories');
		console.log("Response inside api call =>", response.data);
		return response.data;
	} catch(e) {
		console.log("Error while fetching categories -", e);
	}
}

export {getCategoriesDataApi};