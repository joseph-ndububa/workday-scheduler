// sets the date and time at the top of the application

function setDate() {
    var today = moment().format('MMMM Do YYYY, h:mm:ss a');
    $("#currentDay").html(today);
};

// sets the color of each row based on whether its in the past, present, or future

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

// opens textarea to edit events on click

$(".col-10").on("click", function () {
    var textValue = $(this).html();
    if (textValue !== "<textarea></textarea>") {
        var textInput = $("<textarea>")
            .val(textValue);
        $(this).empty();
        $(this).append(textInput);
        textInput.trigger("focus");
    }
});

// reverts back when textarea goes out of focus

$(".col-10").on("blur", "textarea", function () {
    var text = $(this).val();
    $(this).parent().empty().append(text);
    $(this).remove();
});

// update the date and colors every 60 seconds

setInterval(function () {
    setDate();
    colorCode();
}, 60000);

// saves event data for each time slot

var saveNine = function () {
    var nine = {
        description: $("#nine").html()
    }
    localStorage.setItem("nine", JSON.stringify(nine));
};

var saveTen = function () {
    var ten = {
        description: $("#ten").html()
    }
    localStorage.setItem("ten", JSON.stringify(ten));
};

var saveEleven = function () {
    var eleven = {
        description: $("#eleven").html()
    }
    localStorage.setItem("eleven", JSON.stringify(eleven));
};

var saveTwelve = function () {
    var twelve = {
        description: $("#twelve").html()
    }
    localStorage.setItem("twelve", JSON.stringify(twelve));
};

var saveOne = function () {
    var one = {
        description: $("#one").html()
    }
    localStorage.setItem("one", JSON.stringify(one));
};

var saveTwo = function () {
    var two = {
        description: $("#two").html()
    }
    localStorage.setItem("two", JSON.stringify(two));
};
var saveThree = function () {
    var three = {
        description: $("#three").html()
    }
    localStorage.setItem("three", JSON.stringify(three));
};

var saveFour = function () {
    var four = {
        description: $("#four").html()
    }
    localStorage.setItem("four", JSON.stringify(four));
};

var saveFive = function () {
    var five = {
        description: $("#five").html()
    }
    localStorage.setItem("five", JSON.stringify(five));
};

// load saved events 

var loadEvents = function () {
    var nine = JSON.parse(localStorage.getItem("nine"));
    var ten = JSON.parse(localStorage.getItem("ten"));
    var eleven = JSON.parse(localStorage.getItem("eleven"));
    var twelve = JSON.parse(localStorage.getItem("twelve"));
    var one = JSON.parse(localStorage.getItem("one"));
    var two = JSON.parse(localStorage.getItem("two"));
    var three = JSON.parse(localStorage.getItem("three"));
    var four = JSON.parse(localStorage.getItem("four"));
    var five = JSON.parse(localStorage.getItem("five"));

    // if nothing in localStorage, create new objects to track all event statuses, otherwise, load existing events
    if (!nine) {
        var nine = {
            description: ""
        };
    };

    if (!ten) {
        var ten = {
            description: ""
        };
    };

    if (!eleven) {
        var eleven = {
            description: ""
        };
    };

    if (!twelve) {
        var twelve = {
            description: ""
        };
    };

    if (!one) {
        var one = {
            description: ""
        };
    };

    if (!two) {
        var two = {
            description: ""
        };
    };

    if (!three) {
        var three = {
            description: ""
        };
    };

    if (!four) {
        var four = {
            description: ""
        };
    };

    if (!five) {
        var five = {
            description: ""
        };
    };

    $("#nine").html(nine.description);
    $("#ten").html(ten.description);
    $("#eleven").html(eleven.description);
    $("#twelve").html(twelve.description);
    $("#one").html(one.description);
    $("#two").html(two.description);
    $("#three").html(three.description);
    $("#four").html(four.description);
    $("#five").html(five.description);
};

// saves events when the save button is clicked

$("#saveNine").on("click", function () {
    saveNine();
});

$("#saveTen").on("click", function () {
    saveTen();
});

$("#saveEleven").on("click", function () {
    saveEleven();
});

$("#saveTwelve").on("click", function () {
    saveTwelve();
});

$("#saveOne").on("click", function () {
    saveOne();
});

$("#saveTwo").on("click", function () {
    saveTwo();
});

$("#saveThree").on("click", function () {
    saveThree();
});

$("#saveFour").on("click", function () {
    saveFour();
});

$("#saveFive").on("click", function () {
    saveFive();
});

// function to set the date, colors, and events on page load

function initialize() {
    setDate();
    colorCode();
    loadEvents();
}

// call functions when the DOM is ready

$(document).ready(initialize);