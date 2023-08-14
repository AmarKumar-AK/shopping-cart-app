import { axiosInstance } from "../config/axios";

const getOfferDataApi = async() => {
	try {
		const response = await axiosInstance.get('banners');
		console.log("Response inside api call =>", response.data);
		return response.data;
	} catch(e) {
		console.log("Error while fetching categories -", e);
	}
}

export {getOfferDataApi};