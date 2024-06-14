import axios from "axios"

class WeatherDataService {
    static getLocationDataById = async (cityId) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=dd5a605075ee57296c5d5b89bcc55c3c`);
            return response
        } catch (AxiosError) {
            return AxiosError.response
        }
    } 

    static getLocationDataByName = async (cityName) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=dd5a605075ee57296c5d5b89bcc55c3c`);
            return response
        } catch (AxiosError) {
            return AxiosError.response
        }
    }
}

// const response = await WeatherDataService.getLocationDataByName("London")
// console.log(response)

export default WeatherDataService