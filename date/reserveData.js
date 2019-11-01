function getDaysReserve() {
    var x = document.getElementById("monthReserve").value;
    var day = document.getElementById("dayReserve");
    document.getElementById("option");
    var y = 0;
    var daysReserveArray = [y];
    if (x == 2) {
        daysReserveArray.length = 0;
        let y = 0;
        while (daysReserveArray.length < 29) {
            daysReserveArray.push(y++);
        }
        /* Tjekker efter værdien af månederne. Hvis månederne er ulige, så er der 30 dage da det skal være arraylength - 1 osv.*/
    }
    else if (x == 1 || x == 3 || x == 5 || x == 7 || x == 9 || x == 11) {
        daysReserveArray.length = 0;
        let y = 0;
        while (daysReserveArray.length < 31) {
            daysReserveArray.push(y++);
        }
    }
    else {
        daysReserveArray.length = 0;
        let y = 0;
        while (daysReserveArray.length < 32) {
            daysReserveArray.push(y++);
        }
    }
    /* Hvis der er flere end 1 valgmuligheder ved select med id "day", så resetter den*/

    if (day.options.length > 1){
        day.options.length = 0;
    }
    /* Tilføjer alle dagene fra arrayet, og giver dem værdi + tekst navn. Erklærer også at alle items i arrayet hedder options */
    for (var options in daysReserveArray) {
        daysReserveArray[options];
        var newOptions = document.createElement("option");
        newOptions.value = daysReserveArray[options];
        newOptions.innerHTML = daysReserveArray[options];
        day.options.add(newOptions);
    }
}
/* Henter tid med Date() og definerer variable. Her indgår bl.a. start og sluttidspunkt*/
/* Laver en function der tilføjer et array item mere, så længe startåret er mindre end det nuværende år. Det item der bliver tilføjet, er det tidligere år + 1. */
function getYearsReserve() {
    var yearReserve = document.getElementById("yearReserve");
    var date = new Date();
    var currentYearReserve = date.getFullYear();
    var startYearReserve = currentYearReserve;
    var yearArrayReserve = [startYearReserve];
    for (startYearReserve; startYearReserve < currentYearReserve + 10; yearArrayReserve.push(startYearReserve += 1));
    /* Years defineres som værende items i arrayen. "yearsReserve in" er "for hver yearsReserve/item i..." Så defineres de alle med navn og value. Laves ny "createYear" variable, til navngivning og value tildeling af de forskellige items i arrayet*/
    for (yearsReserve in yearArrayReserve) {
        yearArrayReserve[yearsReserve];
        var createYearReserve = document.createElement("option");
        createYearReserve.value = yearArrayReserve[yearsReserve];
        createYearReserve.innerHTML = yearArrayReserve[yearsReserve];
        yearReserve.options.add(createYearReserve);

    }
}