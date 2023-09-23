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

const searchIcon = document.getElementById("secrch-icon");
const cityName = document.getElementById("cityName");

searchIcon.addEventListener("click",()=>{
  const searchbarValue = document.getElementById("searchbar-text");
  cityName.innerText = searchbarValue.value;
})



