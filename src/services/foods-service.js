import axios from "axios";
import { foodsConstants, globalConstants } from "../utils/constants";

const apiUrl = globalConstants.API_URL + "foods";

export async function getAll() {
	let foods = (await axios.get(apiUrl)).data;
	return foods;
}

export function createFood(food) {
	if (!food.description) {
		throw new Error(foodsConstants.INVALID_DESCRIPTION);
	}

	if (!food.protein 
		|| !food.fat
		|| !food.carbs
		|| food.protein < 0
		|| food.fat < 0
		|| food.carbs < 0
		|| isNaN(food.protein) 
		|| isNaN(food.fat)
		|| isNaN(food.carbs)
		) {
			throw new Error(foodsConstants.INVALID_VALUE);
	}

  return axios.post(apiUrl, food);
}