// TODO JAVASCRIPT CODE OF COMPONENTS HERE ==>

// Header Main Navbar events
window.addEventListener("scroll", function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var nav = document.querySelector('nav');
    nav.classList.toggle("stickySide", window.scrollY > 0)
})

//TODO ---------- Calendar dynamic date
const currentDate = document.querySelector('.current-date');
dayTags = document.querySelector('.days');
prevNextIcon = document.querySelectorAll('.icons span');


let calDate = new Date(),
    currYear = calDate.getFullYear(),
    currMonth = calDate.getMonth();

const allMonths = ['January', 'Febrary', 'March', 'April',
    'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const renderCalendar = () => {
    let firstDateOfMoth = new Date(currYear, currMonth, 1).getDay(), // getting first date of moth
        lastDateOfMoth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of moth
        lastDayOfMoth = new Date(currYear, currMonth, lastDateOfMoth).getDay(), // getting last day of moth
        lastDateOfLastMoth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previus month

    let liTag = '';

    for (let i = firstDateOfMoth; i > 0; i--) {
        liTag += `<li class="incative-days">${lastDateOfLastMoth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMoth; i++) {
        let isToday = i === calDate.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active-day" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMoth; i < 6; i++) {
        liTag += `<li class="incative-days">${i - lastDayOfMoth + 1}</li>`;
    }

    currentDate.innerHTML = `${allMonths[currMonth]} ${currYear}`;
    dayTags.innerHTML = liTag;

}
renderCalendar();

prevNextIcon.forEach(icon => {
    icon.addEventListener('click', () => {
        currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) {
            date = new Date(currYear, currMonth);
            currYear = calDate.getFullYear();
            currMonth = calDate.getMonth();
        } else {
            date = new Date();
        }
        renderCalendar();
    })
});


// Ticket dynamic date
function ticketDate() {
    var td = new Date();
    var day = td.getDay();
    var fdate = td.getDate();
    var month = td.getMonth();
    var year = td.getFullYear();
    var place = document.getElementById('now-saletik-date');

    switch (day) {
        case 0:
            day = 'Monday';
            break;
        case 1:
            day = 'Thuesday';
            break;
        case 2:
            day = 'Wednesday';
            break;
        case 3:
            day = 'Thursday';
            break;
        case 4:
            day = 'Friday';
            break;
        case 5:
            day = 'Saturday';
            break;
        case 6:
            day = 'Sunday';
            break;
        default:
            day = 'Uknown Month';
            break;
    }

    switch (month) {
        case 0:
            month = 'January';
            break;
        case 1:
            month = 'Febrary';
            break;
        case 2:
            month = 'March';
            break;
        case 3:
            month = 'April';
            break;
        case 4:
            month = 'May';
            break;
        case 5:
            month = 'June';
            break;
        case 6:
            month = 'July';
            break;
        case 7:
            month = 'Augost';
            break;
        case 8:
            month = 'September';
            break;
        case 9:
            month = 'Octuber';
            break;
        case 10:
            month = 'November';
            break;
        case 11:
            month = 'December';
            break;
        default:
            month = 'Uknown Month'
            break;
    }

    place.innerHTML = "DATE: " + day + " - " + fdate + " / " + month + " / " + year;
}

setInterval(ticketDate, 1000);