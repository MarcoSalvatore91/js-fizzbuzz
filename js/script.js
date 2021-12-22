console.log('JS OK!');

/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// 1- Scrivere un programma che stampi i numeri da 1 a 100
// 2- Per i multipli di 3 stampare la parola Fizz 
// 3- Per i multipli di 5 stampare la parola Buzz 
// 4- Per i multipli di 3 e 5 stampare la parola FizzBuzz 

const numberList = document.getElementById('number');

let elementNumber = ' ';

// 1- Scrivere un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // 2- Per i multipli di 3 stampare la parola Fizz 
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz')
    // 3- Per i multipli di 5 stampare la parola Buzz 
    } if (i % 3 === 0 && !(i % 5 === 0)) {
        console.log('Fizz')
    // 4- Per i multipli di 3 e 5 stampare la parola FizzBuzz
    } if (i % 5 === 0 && !(i % 3 === 0)) {
        console.log('Buzz')
    } else {
        elementNumber += ` ${i}`;
        console.log(elementNumber);
    }
}

numberList.innerText = elementNumber;