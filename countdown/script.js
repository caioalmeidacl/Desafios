const months = document.getElementById("months");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

setInterval(() => {
    let currentDate = new Date();
    let remainMonths = 11 - currentDate.getMonth();
    let remainDays = new Date(currentDate.getFullYear(), 11, 31).getDate() - currentDate.getDate();
    let remainHours = 23 - currentDate.getHours() ;
    let remainMinutes = 60 - currentDate.getMinutes();
    let remainSeconds = 60 - currentDate.getSeconds();   



    months.textContent = remainMonths;
    days.textContent = remainDays;
    hours.textContent = remainHours;
    minutes.textContent = remainMinutes;
    seconds.textContent = remainSeconds;
} , 1000);