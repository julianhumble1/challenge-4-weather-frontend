class WeatherDataFormatter {

    // returns forecast as array
    static getForecastAsArray = (data) => {
    const tempDays = [];
    const dayIndices = getDayIndices(data);
    for (let i = 0; i < 5; i++) {
        const currentData = data.list[dayIndices[i]];
        tempDays.push({
            date: currentData.dt_txt,
            weather_desc: currentData.weather[0].description,
            icon: currentData.weather[0].icon,
            temp: currentData.main.temp,
            });
        }
        return tempDays;
    };

    // identify indices in the array where a new day starts
    static getDayIndices = (data) => {
        let dayIndices = [0];
        let currentDay = data.list[0].dt_txt.slice(8, 10);

        for (let i = 1; i < data.list.length; i++) {
            let day = data.list[i].dt_txt.slice(8, 10);
            let hour = data.list[i].dt_txt.slice(11, 13);

            if (day !== currentDay && hour === "15") {
                dayIndices.push(i);
                currentDay = day;
                // Stop after finding 4 different days
                if (dayIndices.length === 5) {
                    break;
                }}
            }
        return dayIndices;
    };

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

export default WeatherDataFormatter;

