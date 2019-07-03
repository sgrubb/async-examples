const fs = require('fs');

const file = process.argv[2];

const readData = () => {
    const data = fs.readFileSync(file);
    return JSON.parse(data);
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = () => {
    try {
        const data = readData();
        printData(data);
    } catch (e) {
        console.log('No such file');
    }
};

readAndPrintData();
