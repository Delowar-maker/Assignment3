function getDayOfWeek() {
  var dateInput = document.getElementById("dateInput").value;
  var date = new Date(dateInput);
  var daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var dayIndex = date.getDay();
  var dayOfWeek = daysOfWeek[dayIndex];

  //   console.log(dayofWeek);

  document.getElementById("result").textContent =
    "The day of the week is: " + dayOfWeek;
}

function displayCurrentDayOfWeek() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var currentMonth = String(currentDate.getMonth() + 1).padStart(2, "0");
  var currentDay = String(currentDate.getDate()).padStart(2, "0");
  var currentDateString = `${currentYear}-${currentMonth}-${currentDay}`;
  var dayOfWeek = getDayOfWeek(currentDateString);

  document.getElementById("result").textContent =
    "The day of the week for the current date is: " + dayOfWeek;
}

displayCurrentDayOfWeek();
