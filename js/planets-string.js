(function(){
    "use strict";

    var planets2String = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planets2Array = planets2String.split("|");

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    console.log(planets2Array);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    var brPlanets = planets2Array.join("<br>");

    var htmlPlanets = "<ul><li>" + planets2Array.join("</li><li>") +
                        "</li></ul>";

    console.log(brPlanets);
    console.log(htmlPlanets);

})();
