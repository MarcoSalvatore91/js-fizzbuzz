console.log('JS OK!');

/* Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi Fizz al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// 1- Scrivere un programma che stampi i numeri da 1 a 100
// 2- Per i multipli di 3 e 5 stampare la parola FizzBuzz 
// 3- Per i multipli di 3 stampare la parola Fizz 
// 4- Per i multipli di 5 stampare la parola Buzz 
// 5- Stampare il codice

const numberList = document.getElementById('number');

let elementNumber = ' ';

// 1- Scrivere un programma che stampi i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    // 2- Per i multipli di 3 e 5 stampare la parola FizzBuzz 
    if (i % 3 === 0 && i % 5 === 0) {
        elementNumber += `<li id"number"> FizzBuzz</li>`;
        console.log('FizzBuzz')
    // 3- Per i multipli di 3 stampare la parola Fizz
    } else if (i % 3 === 0) {
        elementNumber += `<li id"number"> Fizz</li>`;
        console.log('Fizz')
    // 4- Per i multipli di 5 stampare la parola Buzz
    } else if (i % 5 === 0) {
        elementNumber += `<li id"number"> Buzz</li>`;
        console.log('Buzz')
    } else {
        elementNumber += `<li>${i}</li>`;
        console.log(i);
    }
}
// Stampare il codice
numberList.innerHTML = elementNumber;