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



// $(function () {
//   var bindDatePicker = function() {
//    $(".date").datetimepicker({
//        format:'YYYY-MM-DD',
//      icons: {
//        time: "fa fa-clock-o",
//        date: "fa fa-calendar",
//        up: "fa fa-arrow-up",
//        down: "fa fa-arrow-down"
//      }
//    }).find('input:first').on("blur",function () {
//      // check if the date is correct. We can accept dd-mm-yyyy and yyyy-mm-dd.
//      // update the format if it's yyyy-mm-dd
//      var date = parseDate($(this).val());

//      if (! isValidDate(date)) {
//        //create date based on momentjs (we have that)
//        date = moment().format('YYYY-MM-DD');
//      }

//      $(this).val(date);
//    });
//  }
  
//   var isValidDate = function(value, format) {
//    format = format || false;
//    // lets parse the date to the best of our knowledge
//    if (format) {
//      value = parseDate(value);
//    }

//    var timestamp = Date.parse(value);

//    return isNaN(timestamp) == false;
//   }
  
//   var parseDate = function(value) {
//    var m = value.match(/^(\d{1,2})(\/|-)?(\d{1,2})(\/|-)?(\d{4})$/);
//    if (m)
//      value = m[5] + '-' + ("00" + m[3]).slice(-2) + '-' + ("00" + m[1]).slice(-2);

//    return value;
//   }
  
//   bindDatePicker();
// });


