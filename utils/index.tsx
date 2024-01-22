import { CarCardProps, FilterProps } from "@/types";

export default async function fetchCars(filters:FilterProps){
    const headers={
		'X-RapidAPI-Key': '3624148276msh0e08a89fdbf13e2p16beb4jsnff2e6d8e597e',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  const {manufacturar,year,fuel,limit,model} = filters;
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturar}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{headers:headers});
    const result = await response.json();
    return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };