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
const forecastDay1Img =$("#day1-img");
const forecastDay1Temp =$("#day1-temp");
const forecastDay1Humidity =$("#day1-humidity");
const forecastDay1Visibility =$("#day1-visibility");

const forecastDay2 =$("#day2");
const forecastDay2Img =$("#day2-img");
const forecastDay2Temp =$("#day2-temp");
const forecastDay2Humidity =$("#day2-humidity");
const forecastDay2Visibility =$("#day2-visibility");

const forecastDay3 =$("#day3");
const forecastDay3Img =$("#day3-img");
const forecastDay3Temp =$("#day3-temp");
const forecastDay3Humidity =$("#day3-humidity");
const forecastDay3Visibility =$("#day3-visibility");

const forecastDay4 =$("#day4");
const forecastDay4Img =$("#day4-img");
const forecastDay4Temp =$("#day4-temp");
const forecastDay4Humidity =$("#day4-humidity");
const forecastDay4Visibility =$("#day4-visibility");

const forecastDay5 =$("#day5");
const forecastDay5Img =$("#day5-img");
const forecastDay5Temp =$("#day5-temp");
const forecastDay5Humidity =$("#day5-humidity");
const forecastDay5Visibility =$("#day5-visibility");

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

    setWeather(typedText);
  }
  })
  
}

const searchUrl = "http://api.weatherapi.com/v1/search.json?key=89cc63fe3a254352b8d132020231609&q="

const currentUrl = "http://api.weatherapi.com/v1/current.json?key=89cc63fe3a254352b8d132020231609&q="

const forecastUrl = "https://api.weatherapi.com/v1/forecast.json?key=89cc63fe3a254352b8d132020231609&days=5&q="

let city;


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

    currentLocationTemperature.text(weatherResponse.current.temp_c+ "℃");
    temperature.text(weatherResponse.current.temp_c+ "℃");
    humidity.text(weatherResponse.current.humidity+"%");
    windSpeed.text(weatherResponse.current.wind_kph+"kph")
    uv.text(weatherResponse.current.uv);
    visibility.text(weatherResponse.current.vis_km+"km");
    pressure.text(weatherResponse.current.pressure_mb +"hPa");

  } catch (error) {
    console.error("Error fetching weather data:", error);

  }

  try {
    const weatherForecastResponse = await $.ajax({
      method: "GET",
      url: forecastUrl + cityName,
    });
    console.log(weatherForecastResponse);
    let date1 = weatherForecastResponse['forecast']['forecastday'][0]['date'];
    let date1Temp = weatherForecastResponse['forecast']['forecastday'][0]['day']['avgtemp_c'];
    let date1Humidity = weatherForecastResponse['forecast']['forecastday'][0]['day']['avghumidity'];
    let date1Visibility = weatherForecastResponse['forecast']['forecastday'][0]['day']['avgvis_km'];

    let date2 = weatherForecastResponse['forecast']['forecastday'][1]['date'];
    let date2Temp = weatherForecastResponse['forecast']['forecastday'][1]['day']['avgtemp_c'];
    let date2Humidity = weatherForecastResponse['forecast']['forecastday'][1]['day']['avghumidity'];
    let date2Visibility = weatherForecastResponse['forecast']['forecastday'][1]['day']['avgvis_km'];

    let date3 = weatherForecastResponse['forecast']['forecastday'][2]['date'];
    let date3Temp = weatherForecastResponse['forecast']['forecastday'][2]['day']['avgtemp_c'];
    let date3Humidity = weatherForecastResponse['forecast']['forecastday'][2]['day']['avghumidity'];
    let date3Visibility = weatherForecastResponse['forecast']['forecastday'][2]['day']['avgvis_km'];

    let date4 = weatherForecastResponse['forecast']['forecastday'][3]['date'];
    let date4Temp = weatherForecastResponse['forecast']['forecastday'][3]['day']['avgtemp_c'];
    let date4Humidity = weatherForecastResponse['forecast']['forecastday'][3]['day']['avghumidity'];
    let date4Visibility = weatherForecastResponse['forecast']['forecastday'][3]['day']['avgvis_km'];

    let date5 = weatherForecastResponse['forecast']['forecastday'][4]['date'];
    let date5Temp = weatherForecastResponse['forecast']['forecastday'][4]['day']['avgtemp_c'];
    let date5Humidity = weatherForecastResponse['forecast']['forecastday'][4]['day']['avghumidity'];
    let date5Visibility = weatherForecastResponse['forecast']['forecastday'][4]['day']['avgvis_km'];
    
    forecastDay1.text(date1);
    forecastDay1Temp.text(date1Temp+"℃");
    forecastDay1Humidity.text(date1Humidity+"%");
    forecastDay1Visibility.text(date1Visibility+"km");

    forecastDay2.text(date2);
    forecastDay2Temp.text(date2Temp+"℃");
    forecastDay2Humidity.text(date2Humidity+"%");
    forecastDay2Visibility.text(date2Visibility+"km");

    forecastDay3.text(date3);
    forecastDay3Temp.text(date3Temp+"℃");
    forecastDay3Humidity.text(date3Humidity+"%");
    forecastDay3Visibility.text(date3Visibility+"km");

    forecastDay4.text(date4);
    forecastDay4Temp.text(date4Temp+"℃");
    forecastDay4Humidity.text(date4Humidity+"%");
    forecastDay4Visibility.text(date4Visibility+"km");

    forecastDay5.text(date5);
    forecastDay5Temp.text(date5Temp+"℃");
    forecastDay5Humidity.text(date5Humidity+"%");
    forecastDay5Visibility.text(date5Visibility+"km");
  
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