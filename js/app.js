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

//----------------------Get current Date-----------------------------
const dateToday = new Date();
var year1 = dateToday.getFullYear();
var month1 = String(dateToday.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it is zero-based
var day1 = String(dateToday.getDate()).padStart(2, '0');
var formattedDateToday = year1 + '-' + month1 + '-' + day1;

console.log(formattedDateToday);

//----------------------Get seven Days ago date-------------------------

var currenDate = new Date();

// Subtract 7 days (7 * 24 * 60 * 60 * 1000 milliseconds) from the current date
var sevenDaysAgo = new Date(currenDate.getTime() - 7 * 24 * 60 * 60 * 1000);

// Extract the year, month, and day components from the sevenDaysAgo date
var year = sevenDaysAgo.getFullYear();
var month = String(sevenDaysAgo.getMonth() + 1).padStart(2, '0'); // Adding 1 to month because it is zero-based
var day = String(sevenDaysAgo.getDate()).padStart(2, '0');

// Create the "yyyy-mm-dd" formatted string
var formattedDate = year + '-' + month + '-' + day;
console.log(formattedDate);


//----------------------set current weather data----------------------------

const cityName = $("#cityName");
const currentLocationTemperature = $("#current-loc-temperarure");
const currentLocWeatherImg = $("#current-loc-weather-img");
const temperature = $("#lblTemperature");
const humidity = $("#lblHumidity");
const windSpeed = $("#lblWindSpeed");
const uv = $("#lblUv");
const visibility = $("#lblVisibility");
const pressure = $("#lblPressure");

//---------------------set weather forecast-----------------------------

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

//----------------------------set history weather data---------------------------


const historyDay1 = $("#history-day1");
const historyDay2 = $("#history-day2");
const historyDay3 = $("#history-day3");
const historyDay4 = $("#history-day4");
const historyDay5 = $("#history-day5");
const historyDay6 = $("#history-day6");
const historyDay7 = $("#history-day7");

const historyDay1Temp = $("#history-day1-temp");
const historyDay2Temp = $("#history-day2-temp");
const historyDay3Temp = $("#history-day3-temp");
const historyDay4Temp = $("#history-day4-temp");
const historyDay5Temp = $("#history-day5-temp");
const historyDay6Temp = $("#history-day6-temp");
const historyDay7Temp = $("#history-day7-temp");

const historyDay1Img = $("#pre-day1-img");
const historyDay2Img = $("#pre-day2-img");
const historyDay3Img = $("#pre-day3-img");
const historyDay4Img = $("#pre-day4-img");
const historyDay5Img = $("#pre-day5-img");
const historyDay6Img = $("#pre-day6-img");
const historyDay7Img = $("#pre-day7-img");

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
    currentLocWeatherImg.attr("src",resp.current.condition.icon);
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

const forecastUrl = "https://api.weatherapi.com/v1/forecast.json?key=89cc63fe3a254352b8d132020231609&days=6&q="

const historyUrl = `https://api.weatherapi.com/v1/history.json?&dt=${formattedDate}&end_dt=${formattedDateToday}&key=89cc63fe3a254352b8d132020231609&q=`

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
  console.log("Current Location : "+city);
  setWeather(city);
}

async function setWeather(cityName) {
  try {
    const weatherResponse = await $.ajax({
      method: "GET",
      url: currentUrl + cityName,
    });
    console.log(weatherResponse);
    console.log(cityName);

    currentLocationTemperature.text(weatherResponse.current.temp_c+ "℃");
    currentLocWeatherImg.attr("src",weatherResponse.current.condition.icon);
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
    let date1 = weatherForecastResponse['forecast']['forecastday'][1]['date'];
    let date1Img = weatherForecastResponse['forecast']['forecastday'][1]['day']['condition']['icon'];
    let date1Temp = weatherForecastResponse['forecast']['forecastday'][1]['day']['avgtemp_c'];
    let date1Humidity = weatherForecastResponse['forecast']['forecastday'][1]['day']['avghumidity'];
    let date1Visibility = weatherForecastResponse['forecast']['forecastday'][1]['day']['avgvis_km'];

    let date2 = weatherForecastResponse['forecast']['forecastday'][2]['date'];
    let date2Img = weatherForecastResponse['forecast']['forecastday'][2]['day']['condition']['icon'];
    let date2Temp = weatherForecastResponse['forecast']['forecastday'][2]['day']['avgtemp_c'];
    let date2Humidity = weatherForecastResponse['forecast']['forecastday'][2]['day']['avghumidity'];
    let date2Visibility = weatherForecastResponse['forecast']['forecastday'][2]['day']['avgvis_km'];

    let date3 = weatherForecastResponse['forecast']['forecastday'][3]['date'];
    let date3Img = weatherForecastResponse['forecast']['forecastday'][3]['day']['condition']['icon'];
    let date3Temp = weatherForecastResponse['forecast']['forecastday'][3]['day']['avgtemp_c'];
    let date3Humidity = weatherForecastResponse['forecast']['forecastday'][3]['day']['avghumidity'];
    let date3Visibility = weatherForecastResponse['forecast']['forecastday'][3]['day']['avgvis_km'];

    let date4 = weatherForecastResponse['forecast']['forecastday'][4]['date'];
    let date4Img = weatherForecastResponse['forecast']['forecastday'][4]['day']['condition']['icon'];
    let date4Temp = weatherForecastResponse['forecast']['forecastday'][4]['day']['avgtemp_c'];
    let date4Humidity = weatherForecastResponse['forecast']['forecastday'][4]['day']['avghumidity'];
    let date4Visibility = weatherForecastResponse['forecast']['forecastday'][4]['day']['avgvis_km'];

    let date5 = weatherForecastResponse['forecast']['forecastday'][5]['date'];
    let date5Img = weatherForecastResponse['forecast']['forecastday'][5]['day']['condition']['icon'];
    let date5Temp = weatherForecastResponse['forecast']['forecastday'][5]['day']['avgtemp_c'];
    let date5Humidity = weatherForecastResponse['forecast']['forecastday'][5]['day']['avghumidity'];
    let date5Visibility = weatherForecastResponse['forecast']['forecastday'][5]['day']['avgvis_km'];
    
    forecastDay1.text(date1);
    forecastDay1Img.attr("src",date1Img);
    forecastDay1Temp.text(date1Temp+"℃");
    forecastDay1Humidity.text(date1Humidity+"%");
    forecastDay1Visibility.text(date1Visibility+"km");

    forecastDay2.text(date2);
    forecastDay2Img.attr("src",date2Img);
    forecastDay2Temp.text(date2Temp+"℃");
    forecastDay2Humidity.text(date2Humidity+"%");
    forecastDay2Visibility.text(date2Visibility+"km");

    forecastDay3.text(date3);
    forecastDay3Img.attr("src",date3Img);
    forecastDay3Temp.text(date3Temp+"℃");
    forecastDay3Humidity.text(date3Humidity+"%");
    forecastDay3Visibility.text(date3Visibility+"km");

    forecastDay4.text(date4);
    forecastDay4Img.attr("src",date4Img);
    forecastDay4Temp.text(date4Temp+"℃");
    forecastDay4Humidity.text(date4Humidity+"%");
    forecastDay4Visibility.text(date4Visibility+"km");

    forecastDay5.text(date5);
    forecastDay5Img.attr("src",date5Img);
    forecastDay5Temp.text(date5Temp+"℃");
    forecastDay5Humidity.text(date5Humidity+"%");
    forecastDay5Visibility.text(date5Visibility+"km");
  
  } catch (error) {
    console.error("Error fetching weather data:", error);

  }

  try {
    const historyWeatherResponse = await $.ajax({
      method: "GET",
      url: historyUrl + cityName,
    });
    console.log("History Weather");
    console.log(historyWeatherResponse);

    historyDay1.text(historyWeatherResponse.forecast.forecastday[6].date);
    historyDay2.text(historyWeatherResponse.forecast.forecastday[5].date);
    historyDay3.text(historyWeatherResponse.forecast.forecastday[4].date);
    historyDay4.text(historyWeatherResponse.forecast.forecastday[3].date);
    historyDay5.text(historyWeatherResponse.forecast.forecastday[2].date);
    historyDay6.text(historyWeatherResponse.forecast.forecastday[1].date);
    historyDay7.text(historyWeatherResponse.forecast.forecastday[0].date);

    historyDay1Temp.text(historyWeatherResponse.forecast.forecastday[6].day.avgtemp_c+"℃");
    historyDay2Temp.text(historyWeatherResponse.forecast.forecastday[5].day.avgtemp_c+"℃");
    historyDay3Temp.text(historyWeatherResponse.forecast.forecastday[4].day.avgtemp_c+"℃");
    historyDay4Temp.text(historyWeatherResponse.forecast.forecastday[3].day.avgtemp_c+"℃");
    historyDay5Temp.text(historyWeatherResponse.forecast.forecastday[2].day.avgtemp_c+"℃");
    historyDay6Temp.text(historyWeatherResponse.forecast.forecastday[1].day.avgtemp_c+"℃");
    historyDay7Temp.text(historyWeatherResponse.forecast.forecastday[0].day.avgtemp_c+"℃");

    historyDay1Img.attr("src",historyWeatherResponse.forecast.forecastday[6].day.condition.icon);
    historyDay2Img.attr("src",historyWeatherResponse.forecast.forecastday[5].day.condition.icon);
    historyDay3Img.attr("src",historyWeatherResponse.forecast.forecastday[4].day.condition.icon);
    historyDay4Img.attr("src",historyWeatherResponse.forecast.forecastday[3].day.condition.icon);
    historyDay5Img.attr("src",historyWeatherResponse.forecast.forecastday[2].day.condition.icon);
    historyDay6Img.attr("src",historyWeatherResponse.forecast.forecastday[1].day.condition.icon);
    historyDay7Img.attr("src",historyWeatherResponse.forecast.forecastday[0].day.condition.icon);


  } catch (error) {
    console.error("Error fetching weather data:", error);

  }
}

//-------------------Change mode----------------------------

let mood = 0;
const body = document.querySelector("body")
toggle = document.querySelector(".toggle")

toggle.addEventListener("click", ()=>{
    body.classList.toggle("light");
    if(mood%2==0){
      document.querySelector(".temperature").classList.add('light');
      document.querySelector(".card-heading").classList.add('font-change');
      mood++;
    }else{
      document.querySelector(".temperature").classList.remove('light');
      document.querySelector(".card-heading").classList.remove('font-change');
      mood++;
      console.log(mood);
    }
    
})
toggle.addEventListener("click", ()=> toggle.classList.toggle("active"));



 


