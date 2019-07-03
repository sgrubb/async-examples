const fs = require('fs');

const file = process.argv[2];

const readData = (callback) => {
    fs.readFile(file, (err, data) => {
        if (err) {
            console.log('No such file');
            return;
        }

        const jsonData = JSON.parse(data);
        callback(jsonData);
    });
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = () => {
    readData(printData);
};

readAndPrintData();
