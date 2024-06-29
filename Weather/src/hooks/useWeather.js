import axios from "axios";
import { useState } from "react";
const useWeather = () => {
	const [weather, setWeather] = useState({
		name: "",
		temp: "",
		descripiton: "",
		weatherType: "",
		windSpeed: "",
		humidity: "",
		pressure: "",
		sunset: "",
		sunrise: "",
		country: "",
	});
	const [error, setError] = useState("");
	const getWeather = async (city) => {
		const APIkey = String(import.meta.env.VITE_API_KEY);
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;
		try {
			const response = await axios.get(url);
			setWeather({
				name: response.data.name,
				temp: response.data.main.temp,
				description: response.data.weather[0].description,
				weatherType: response.data.weather[0].main,
				windSpeed: response.data.wind.speed,
				humidity: response.data.main.humidity,
				pressure: response.data.main.pressure,
				sunset: new Date(response.data.sys.sunset * 1000)
					.toLocaleTimeString()
					.slice(0, 4),
				sunrise: new Date(response.data.sys.sunrise * 1000)
					.toLocaleTimeString()
					.slice(0, 4),
				country: response.data.sys.country,
			});
		} catch (AxiosError) {
			setError(AxiosError.response.data.message);
			console.log(AxiosError.response.data.message);
		}
	};
	return {
		weather,
		error,
		setError,
		getWeather,
	};
};
export default useWeather;
