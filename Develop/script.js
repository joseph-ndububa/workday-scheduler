function setDate() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');;
    $("#currentDay").html(today);
}

function colorCode() {

    var time = Number(moment().format("HH"));

    if (time < 9) {
        $(".col-10").attr("class", "col-10 future");
    }

    else if (time === 9) {
        $(".col-10").attr("class", "col-10 future");
        $("#nine").attr("class", "col-10 present");
    }

    else if (time === 10) {
        $(".col-10").attr("class", "col-10 future");
        $("#nine").attr("class", "col-10 past");
        $("#ten").attr("class", "col-10 present");
    }

    else if (time === 11) {
        $(".col-10").attr("class", "col-10 future");
        $("#nine").attr("class", "col-10 past");
        $("#ten").attr("class", "col-10 past");
        $("#eleven").attr("class", "col-10 present");
    }

    else if (time === 12) {
        $(".col-10").attr("class", "col-10 future");
        $("#nine").attr("class", "col-10 past");
        $("#ten").attr("class", "col-10 past");
        $("#eleven").attr("class", "col-10 past");
        $("#twelve").attr("class", "col-10 present");
    }

    else if (time === 13) {
        $(".col-10").attr("class", "col-10 future");
        $("#nine").attr("class", "col-10 past");
        $("#ten").attr("class", "col-10 past");
        $("#eleven").attr("class", "col-10 past");
        $("#twelve").attr("class", "col-10 past");
        $("#one").attr("class", "col-10 present");
    }

    else if (time === 14) {
        $(".col-10").attr("class", "col-10 past");
        $("#two").attr("class", "col-10 present");
        $("#three").attr("class", "col-10 future");
        $("#four").attr("class", "col-10 future");
        $("#five").attr("class", "col-10 future");
    }

    else if (time === 15) {
        $(".col-10").attr("class", "col-10 past");
        $("#three").attr("class", "col-10 present");
        $("#four").attr("class", "col-10 future");
        $("#five").attr("class", "col-10 future");
    }

    else if (time === 16) {
        $(".col-10").attr("class", "col-10 past");
        $("#four").attr("class", "col-10 present");
        $("#five").attr("class", "col-10 future");
    }

    else if (time === 17) {
        $(".col-10").attr("class", "col-10 past");
        $("#five").attr("class", "col-10 present");
    }

    else if (time > 17) {
        $(".col-10").attr("class", "col-10 past");
    }
};

// function to set the date and colors

function setDateAndColor() {
    setDate();
    colorCode();
}

// call setDateAndColor when the DOM is ready

$(document).ready(setDateAndColor);

// update the date and colors every second

setInterval(function () {
    setDateAndColor();
}, 1000);