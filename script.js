// Game logic
for (let i = 1; i <= 100; i++) {
    // FizzBuzz displayed logic
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    }

    // Fizz displayed logic
    else if (i % 3 === 0) {
        console.log("Fizz");
    }
    
    // If we have not FizzBuzz or Fizz then we display Buzz
    else if (i % 5 === 5) {
        console.log("Buzz");
    }

    // if not we compute i
    else { 
        console.log(i)
    }
}