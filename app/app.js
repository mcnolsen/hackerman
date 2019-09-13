for(let number = 0; number <= 100; number = number + 1) {
    if (number % 5 == 0) {
        if (number % 3 == 0) {
            console.log ("Fizzbuzz");
        } else {
            console.log ("Buzz");
        }
    }
    else if (number % 3 == 0) {
        if (number % 5 == 0) {
            console.log ("Fizzbuzz")
        } else {
            console.log ("Fizz")
        }
    }
    else {
        console.log(number);
    }
}