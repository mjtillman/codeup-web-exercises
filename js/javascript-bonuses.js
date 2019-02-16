//(function(){

    "use strict";

    function dateTimeStringGenerator(){
        var today = new Date();
        var day = today.getDay();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        var year = today.getFullYear();
        var hour = today.getHours();
        var mins = today.getMinutes();
        var secs = today.getSeconds();
        var meridiem = null;

        day = currentDayGenerator(day);

        meridiem = meridiemGenerator(hour);

        hour = minus12(hour);

        return "Today is " + day + " " + month + "-" + date + "-" + year +
                ". \nThe time is " + hour + ":" +  mins + ":" + secs +
                " " + meridiem + "."
    }

    function currentDayGenerator(day) {
        switch (day) {
            case 0:
                return "Sunday";
            case 1:
                return "Monday";
            case 2:
                return "Tuesday";
            case 3:
                return "Wednesday";
            case 4:
                return "Thursday";
            case 5:
                return "Friday";
            case 6:
                return "Saturday";
            default:
                return "invalid";
        }
    }


    function meridiemGenerator(hour) {
        if (hour < 12) {
            return "AM"
        } else {
            return "PM";
        }
    }

    function minus12(hour) {
        if (hour > 12) {
            return hour - 12;
        }
    }


    console.log(dateTimeStringGenerator());


//})();

