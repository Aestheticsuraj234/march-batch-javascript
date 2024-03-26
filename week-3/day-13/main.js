// console.log("task_1");
// console.log("task_2");



// setTimeout(()=>{
//     console.log("Time's up! meggie are ready.");
// } , 5000)


// console.log("end");


// // task_1
// // task_2
// // end
// // 1s 2s 3s 4s 5s
// // Time's up! meggie are ready.



// function fetchWeatherData(callback) {
//     // Simulating fetching weather data from a server
//     setTimeout(function() {
//         const weatherData = { temperature: 25, condition: "Sunny" };
//         callback(weatherData); // Call the function provided with the weather data
//     }, 2000);
// }

// function displayWeather(weatherData) {
//     console.log(`The temperature is ${weatherData.temperature}°C and it's ${weatherData.condition}.`);
// }
// console.log("task_1")
// console.log("task_3")
// console.log("task_3")

// fetchWeatherData(displayWeather); // This will display the weather after 2 seconds


function fetchWeatherData(callback) {
    setTimeout(function () {
        const WeatherData = { temperature: 25, condition: "Sunny" }
        callback(WeatherData)
    }, 3000);

}

function ShowData(data) {
    console.log(`The temperature is ${data.temperature}°C and it's ${data.condition}.`);
}

fetchWeatherData(ShowData);

