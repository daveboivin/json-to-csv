'use strict';

const fs = require('fs');
const fileName = 'test'; // without .json
let csvString = '';

// Do everything synchronously for easy reading

const file1String = fs.readFileSync(fileName + '.json', 'utf8');

const file1Lines = file1String.split('\n');

file1Lines.forEach((line) => {
    const obj = JSON.parse(line);
    const objValuesArray = Object.values(obj);

    objValuesArray.forEach((value, index) => {
        if (typeof value === 'object') {
            csvString += JSON.stringify(value);
        } else {
            csvString += value;
        }

        if (index < objValuesArray.length - 1) {
            csvString += ', ';
        }
    });
    csvString += '\n';
})

fs.writeFileSync(fileName + '.csv', csvString);