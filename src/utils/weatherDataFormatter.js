class WeatherDataUtils {

    static formatDescription(descriptionString) {
        return descriptionString.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    }
    
    static formatDate(dateString) {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    }
    
    static formatIconPath(iconPathString) {
        return "/assets/weather-icons/" + iconPathString + ".svg";
    }

    static formatTemp(tempString) {
        const kelvin = parseFloat(tempString);
        const celsius = kelvin - 273.15;
        return `${Math.round(celsius)}°C`;
    }

}

export default WeatherDataUtils;

