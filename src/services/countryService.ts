import type { CountriesResponse } from "../models/RestCountriesResponse"
import { get } from "./serviceBase"

const BASE_URL = "https://restcountries.com/v3.1/all?fields=name,flags"

export const getCountries = async () => {
    const response = await get<CountriesResponse>(`${BASE_URL}`);
    return response;
};