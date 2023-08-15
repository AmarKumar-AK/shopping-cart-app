import { axiosInstance } from "../config/axios";

const getUsersDataApi = async() => {
	try {
		const response = await axiosInstance.get('users');
		console.log("Response inside api call =>", response.data);
		return response.data;
	} catch(e) {
		console.log("Error while fetching users -", e);
	}
}

export {getUsersDataApi};