
// const cuteMessage = message => '^.^ ' + message + ' ^.^';

// console.log(cuteMessage('Cold!'));

// const numbers = [1, 2, 3, 4];
// const doubleNumbers = numbers.map(number => number * 2);

// console.log(numbers);
// console.log(doubleNumbers);

function showMessage(message = 'Hi', count = 1) {
    for (let i = 1; i <= count; i++) {
        console.log(i + '. ' + message);
    }
}

showMessage();
showMessage('cute', 7);