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

function findCity(){
  const searchbar = $("#searchbar-text");
  var typedText = searchbar.val();
  const cityName = $("#cityName");
  cityName.text(typedText);
}



