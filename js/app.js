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

const cityName = $("#cityName");
const currentLocationTemperature = $("#current-loc-temperarure");
const temperature = $("#lblTemperature");
const humidity = $("#lblHumidity");
const windSpeed = $("#lblWindSpeed");
const uv = $("#lblUv");
const visibility = $("#lblVisibility");
const pressure = $("#lblPressure");

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
  }

  const error=()=>{
    console.log("ghghgfgf");
  }
  navigator.geolocation.getCurrentPosition(successs,error)
}

location1();

const body = document.querySelector("body")
toggle = document.querySelector(".toggle")



toggle.addEventListener("click", ()=>{
    body.classList.toggle("light");
})

toggle.addEventListener("click", ()=> toggle.classList.toggle("active"));