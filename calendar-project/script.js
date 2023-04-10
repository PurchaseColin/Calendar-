const currentDate = document.querySelector(".current-date"),
  daysTag = document.querySelector(".days"),
  prevNextIxon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
  currYear = date.getFullYear(),
  currMonth = date.getMonth();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "Jully",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const renderCalendar = () => {
  let firstDayfMonth = new Date(currYear, currMonth, 1).getDay(),
    // getting first day of the month
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
    // getting last date of the month
    lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
    // gettinf last day of month
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
  // getting the lst date of the previous month

  let liTag = "";

  for (let i = firstDayfMonth; i > 0; i--) {
    liTag += `<li class='inactive'>${lastDateofLastMonth - i + 1}</li>`;
  }
  // add to the list of dates starting from the  date of the [lastDateofLastMonth - the amount of days needed to fill to the new months first date]

  for (let i = 1; i <= lastDateofMonth; i++) {
    let isToday =
      i === date.getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";
    liTag += `<li class ='${isToday}'>${i}</li>`;
  }
  // add all the date to the html list of dates

  for (let i = lastDayofMonth; i < 6; i++) {
    liTag += `<li class='inactive'>${i - lastDayofMonth + 1}</li>`;
  }
  // add the first days of the next month

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  // add this text to the html p tag with class currentDate
  daysTag.innerHTML = liTag;
  // add this html to the html ul element with the class .days
};

renderCalendar();

prevNextIxon.forEach((icon) => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);

      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }

    renderCalendar();
  });
});
