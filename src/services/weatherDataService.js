import axios from "axios"

class WeatherDataService {
    static getLocationDataById = async (cityId) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=${cityId}&appid=7a7f89a7963bd09da81157625d3cd112`);
            return response
        } catch (AxiosError) {
            return AxiosError.response
        }
    } 

    static getLocationDataByName = async (cityName) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=7a7f89a7963bd09da81157625d3cd112`);
            return response
        } catch (AxiosError) {
            return AxiosError.response
        }
    }
}

const response = await WeatherDataService.getLocationDataByName("London")
console.log(response)

export default WeatherDataService