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


// function findCity(){
//   const searchIcon = document.getElementById("secrch-icon");
//   const cityName = document.getElementById("cityName");
//   const searchbarValue = document.getElementById("searchbar-text");
//   cityName.innerText = searchbarValue.value;
// }

const cityName = $("#cityName");

function findCity(){
  const searchbar = $("#searchbar-text");
  var typedText = searchbar.val();
  const cityName = $("#cityName");
  cityName.text(typedText);
}


function location1(){
  const successs = (position)=>{
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const loc = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    $.ajax({
      method : "GET",
      url : loc,
      success:(res)=>{
        cityName.text(res.locality)
    
      }
    })
  }
  navigator.geolocation.getCurrentPosition(successs,error)
}

$.ajax({
  method : "GET",
  url : loc,
  success:(res)=>{
    cityName.text(res.locality)

  }
})


location1();