function getDays() {
    var x = document.getElementById("month").value;
    var day = document.getElementById("day");
    document.getElementById("option");
    var y = 0;
    var daysArray = [y];
    if (x == 2) {
        daysArray.length = 0;
        let y = 0;
        while (daysArray.length < 29) {
            daysArray.push(y++);
        }
        /* Tjekker efter værdien af månederne. Hvis månederne er ulige, så er der 30 dage da det skal være arraylength - 1 osv.*/
    }
    else if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9 || x == 11) {
        daysArray.length = 0;
        let y = 0;
        while (daysArray.length < 31) {
            daysArray.push(y++);
        }
    }
    else {
        daysArray.length = 0;
        let y = 0;
        while (daysArray.length < 32) {
            daysArray.push(y++);
        }
    }
    /* Hvis der er flere end 1 valgmuligheder ved select med id "day", så resetter den*/

    if (day.options.length > 1){
        day.options.length = 0;
    }
    /* Tilføjer alle dagene fra arrayet, og giver dem værdi + tekst navn. Erklærer også at alle items i arrayet hedder options */
    for (var options in daysArray) {
        daysArray[options];
        var newOptions = document.createElement("option");
        newOptions.value = daysArray[options];
        newOptions.innerHTML = daysArray[options];
        day.options.add(newOptions);
    }
}
/* Henter tid med Date() og definerer variable. Her indgår bl.a. start og sluttidspunkt*/
/* Laver en function der tilføjer et array item mere, så længe startåret er mindre end det nuværende år. Det item der bliver tilføjet, er det tidligere år + 1. */
function getYears() {
    var year = document.getElementById("year");
    var date = new Date();
    var currentYear = date.getFullYear();
    var startYear = currentYear - 120;
    var yearArray = [startYear];
    for (startYear; startYear < currentYear; yearArray.push(startYear += 1));
    /* Years defineres som værende items i arrayen. "years in" er "for hver years/item i..." Så defineres de alle med navn og value. Laves ny "createYear" variable, til navngivning og value tildeling af de forskellige items i arrayet*/
    for (years in yearArray) {
        yearArray[years];
        var createYear = document.createElement("option");
        createYear.value = yearArray[years];
        createYear.innerHTML = yearArray[years];
        year.options.add(createYear);
    }
}