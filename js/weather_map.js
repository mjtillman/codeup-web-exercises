(function() {
"use strict";

let city = {lat: 29.426833, lng: -98.489610};

function getDarkSkyData() {
    $.ajax('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/' + darkSkyKey + '/' + city.lat + ',' + city.lng + '?exclude=currently,minutely,hourly,alerts,flags')
        .done(dataFound);
}

function dataFound(weatherData) {
    $('.weather').each(function (index) {
        $(this).html(cardBuilder(weatherData.daily.data[index], index));
    })
}

function weekdayGen(day) {
    switch (day) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sundday';
    }
}

function monthGen(month) {
    switch (month) {
        case 0: return 'January';
        case 1: return 'February';
        case 2: return 'March';
        case 3: return 'April';
        case 4: return 'May';
        case 5: return 'June';
        case 6: return 'July';
        case 7: return 'August';
        case 8: return 'September';
        case 9: return 'October';
        case 10: return 'November';
        case 11: return 'December';
    }
}

function iconGen(cond) {
    let conditions = [
        {
            cond: 'clear-day',
            img: 'icons/clear-day.svg'
        },  {
            cond: 'clear-night',
            img: 'icons/clear-night.svg'
        },  {
            cond: 'cloudy',
            img: 'icons/cloudy.svg'
        },  {
            cond: 'fog',
            img: 'icons/fog.svg'
        },  {
            cond: 'partly-cloudy-day',
            img: 'icons/partly-cloudy-day.svg'
        },  {
            cond: 'partly-cloudy-night',
            img: 'icons/partly-cloudy-night.svg'
        },  {
            cond: 'rain',
            img: 'icons/rain.svg'
        },  {
            cond: 'sleet',
            img: 'icons/sleet.svg'
        },  {
            cond: 'snow',
            img: 'icons/snow.svg'
        },  {
            cond: 'wind',
            img: 'icons/wind.svg'
        }
    ];

    let image = '';

    conditions.forEach(function (index) {
       if (cond === index.cond) {
           image = index.img;
       }
    });

    return image;
}

function cardBuilder(forecast, index) {

    const date = new Date(forecast.time * 1000);

    let header = '';
    const month = monthGen(date.getMonth());
    const day = date.getDate();
    const status = forecast.icon;
    const image = '' + iconGen(status);

    switch (index) {
        case 0: header = 'today'; break;
        case 1: header = 'tomorrow'; break;
        case 2:
            header = weekdayGen(date.getDay(forecast.time * 1000));
    }

    let html = '';
    html += '<h5>' + header + '</h5>';
    html += '<h6>' + month + ' ' + day + '</h6>';
    html += '<img src="' + image + '">';
    html += 'HI<span class="temp">';
    html += Math.round(forecast.temperatureHigh) + '</span>';
    html += 'LO<span class="temp">' + Math.round(forecast.temperatureLow);
    html += '</span><br>';
    html += forecast.summary + '<br>';
    html += 'humidity: ' + forecast.humidity + '<br>';
    html += 'wind: ' + forecast.windSpeed + '<br>';
    html += 'pressure: ' + forecast.pressure;

    return html;
}

getDarkSkyData(city);

function initMap(city) {

    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 5,
            center: city
        });

    let marker = new google.maps.Marker({position: city, map: map});

}

initMap(city);

})();