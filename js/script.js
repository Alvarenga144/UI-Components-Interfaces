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