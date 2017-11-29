const femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
const maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

const allNames = femaleNames.concat(maleNames);

let newName = 'Marcin';

function isNameHere(name) {
    if (allNames.indexOf(name) === -1) {
        allNames.push(name);
    } else {
        return 'Name is already here';
    }
}
console.log(allNames);

console.log(isNameHere(newName));
console.log(allNames);


console.log(isNameHere('Jan'));
console.log(allNames);

console.log(isNameHere('Marek'));
console.log(allNames);