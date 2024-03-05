// // const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '459fd296ed2a9ead724e825a05e7c900',
// 		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
// 	}
// };
// let searchField = document.getElementById('city');
// let btn = document.getElementById('submit');

// btn.addEventListener('click', (e) => {
//     e.preventDefault();
//     getWeather(searchField.value);
// })

// const getWeather = (city) => {
//     console.log(city,'cityyyy')
//     cityName.innerHTML = city;
//     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=459fd296ed2a9ead724e825a05e7c900`)
// 	// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
// 	.then(response => response.json())
// 	.then(response => {
//         console.log(response);
//         // let heading = document.getElementById('heading');
//         // let temp = document.getElementById('temp');
//         // let sunRise = document.getElementById('sunrise');
//         // let sunSet = document.getElementById('sunset');
//         // let feels = document.getElementById('feelsLike');
//         // let windSpeed = document.getElementById('windSpeed');
//         // let humidity = document.getElementById('humidity');
//         // heading.textContent = searchField.value;
//         // temp.textContent = response.temp;
//         // sunRise.textContent = response.sunrise;
//         // sunSet.textContent = response.sunset;
//         // feels.textContent = response.feels_like;
//         // windSpeed.textContent = response.wind_speed;
//         // humidity.textContent = response.humidity;
        
//     })    
//     .catch((error) => console.log(error));
// }
// // submit.addEventListener("click",(e) => {
// //     e.preventDefault();
// //     getWeather(city.value);
// // });

// // getWeather("Delhi");


	
