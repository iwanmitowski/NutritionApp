import axios from "axios";
import { globalConstants } from "../utils/constants";

const apiUrl = globalConstants.API_URL + "foods";

export async function getAll() {
	let foods = (await axios.get(apiUrl)).data;
	return foods;
}