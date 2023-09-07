const alphabet = [
    ['a', 'A'],
    ['b', 'B'],
    ['c', 'C'],
    ['d', 'D'],
    ['e', 'E'],
    ['f', 'F'],
    ['g', 'G'],
    ['h', 'H'],
    ['i', 'I'],
    ['j', 'J'],
    ['k', 'K'],
    ['l', 'L'],
    ['m', 'M'],
    ['n', 'N'],
    ['o', 'O'],
    ['p', 'P'],
    ['q', 'Q'],
    ['r', 'R'],
    ['s', 'S'],
    ['t', 'T'],
    ['u', 'U'],
    ['v', 'V'],
    ['w', 'W'],
    ['x', 'X'],
    ['y', 'Y'],
    ['z', 'Z'],
];

function myUpperCase(str) {
    let upperStr = '';

    for (let char of str) {
        let found = false;

        for (let [minuscule, majuscule] of alphabet) {
            if (char === minuscule) {
                upperStr += majuscule;
                found = true;
                break;
            }
        }

        if (!found) {
            upperStr += char;
        }
    }

    return upperStr;
}

const test = 'Hello La Plateform!';
const upperTest = myUpperCase(test);
console.log(upperTest);

const html = document.getElementById('root');
html.innerText = test + ' : ' + upperTest;