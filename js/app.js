function refreshTime() {
    const timeDisplay = document.getElementById("time");
    const dateString = new Date().toLocaleTimeString();
    const formattedString = dateString.replace(", ", " - ");
    timeDisplay.textContent = formattedString;
  }
    setInterval(refreshTime, 1000);

const today = new Date().getDay();
const dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturaday"];
const currentDay =document.getElementById("day");
currentDay.textContent = dayList[today];


// function searchIconOnclick(){
//   const searchbar = $("#searchbar-text");
//   var typedText = searchbar.val();
//   const cityName = $("#cityName");
//   cityName.text(typedText);
// }

const locationA = document.getElementById("cityName").textContent;
console.log(locationA);
// console.log(cityName.text);

//----------------------set current weather data----------------------------

const cityName = $("#cityName");
const currentLocationTemperature = $("#current-loc-temperarure");
const temperature = $("#lblTemperature");
const humidity = $("#lblHumidity");
const windSpeed = $("#lblWindSpeed");
const uv = $("#lblUv");
const visibility = $("#lblVisibility");
const pressure = $("#lblPressure");

const forecastDay1 =$("#day1");
const forecastDay1Img =$("#dayi-img");
const forecastDay1Temp =$("#day1-temp");
const forecastDay1Humidity =$("#day1-humidity");
const forecastDay1WindSpeed =$("#day1-windSpeed");

// const forecastDay1 =$("#day1");
// const forecastDay1Img =$("#dayi-img");
// const forecastDay1Temp =$("#day1-temp");
// const forecastDay1Humidity =$("#day1-humidity");
// const forecastDay1WindSpeed =$("#day1-windSpeed");





function searchIconOnclick(){
  const searchbar = $("#searchbar-text");
  var typedText = searchbar.val();

  $.ajax({
    method : "GET",
    url : `http://api.weatherapi.com/v1/current.json?key=89cc63fe3a254352b8d132020231609 &q=${typedText}`,
    success : (resp) => {
    console.log(resp);
    console.log(resp.current.temp_c +"℃");
    cityName.text(resp.location.name);
    currentLocationTemperature.text(resp.current.temp_c+ "℃");
    temperature.text(resp.current.temp_c+ "℃");
    humidity.text(resp.current.humidity+"%");
    windSpeed.text(resp.current.wind_kph+"kph")
    uv.text(resp.current.uv);
    visibility.text(resp.current.vis_km+"km");
    pressure.text(resp.current.pressure_mb +"hPa");
  
    }
  })
  
}

const searchUrl = "http://api.weatherapi.com/v1/search.json?key=89cc63fe3a254352b8d132020231609&q="

let city;

const currentUrl = "http://api.weatherapi.com/v1/current.json?key=89cc63fe3a254352b8d132020231609&q="

const forecastUrl = "https://api.weatherapi.com/v1/forecast.json?key=89cc63fe3a254352b8d132020231609&days=5&q="


// ----------------------set current location--------------------------

function location1(){
  const successs = (position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const loca = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    $.ajax({
      method : "GET",
      url : loca,
      success:(resp)=>{
        // console.log(resp);
        cityName.text(resp.locality)
    
      }
    })
    getLocation(latitude,longitude);
  }

  const error=()=>{
    console.log("ghghgfgf");
  }
  navigator.geolocation.getCurrentPosition(successs,error)
}

location1();


async function getLocation(latitude,longitude){
  const lat = latitude;
  const long = longitude;
  console.log(lat,long);
  console.log(searchUrl + lat.toString() + "," +long.toString());
  const search = await fetch(searchUrl + lat.toString() + "," +long.toString());
  const cityData =  await search.json(); 
  console.log(search);
  console.log(cityData);
  city = cityData[0].name;
  console.log(city);
  setWeather(city);
}


async function setWeather(cityName) {
  try {
    const weatherResponse = await $.ajax({
      method: "GET",
      url: currentUrl + cityName,
    });
    console.log(weatherResponse);

    // const weatherForecastResponse = await $.ajax({
    //   method: "GET",
    //   url: forecastUrl + cityName,
    // });
    // console.log(weatherResponse);

    // forecastDay1.text(weatherForecastResponse.)



    // const weatherResponseForecastUrl = await fetch(forecastUrl + cityName);



    // const weatherResponseForecastUrl = await fetch(forecastUrl + cityName);
    // const forecastWeatherData = await weatherResponseForecast.json();
    // console.log(forecastWeatherData);

    // loactionName.text(weatherResponse.location.name)
    currentLocationTemperature.text(weatherResponse.current.temp_c+ "℃");
    temperature.text(weatherResponse.current.temp_c+ "℃");
    humidity.text(weatherResponse.current.humidity+"%");
    windSpeed.text(weatherResponse.current.wind_kph+"kph")
    uv.text(weatherResponse.current.uv);
    visibility.text(weatherResponse.current.vis_km+"km");
    pressure.text(weatherResponse.current.pressure_mb +"hPa");

  // imgBox.attr("src", weatherResponse.current.condition.icon);
    // weatherType.text(weatherResponse.current.condition.text)

  } catch (error) {
    console.error("Error fetching weather data:", error);

  }

  try {
    const weatherForecastResponse = await $.ajax({
      method: "GET",
      url: forecastUrl + cityName,
    });
    console.log(weatherForecastResponse);

    

  } catch (error) {
    console.error("Error fetching weather data:", error);

  }


}


//-------------------Change mode----------------------------

const body = document.querySelector("body")
toggle = document.querySelector(".toggle")



toggle.addEventListener("click", ()=>{
    body.classList.toggle("light");
})

toggle.addEventListener("click", ()=> toggle.classList.toggle("active"));