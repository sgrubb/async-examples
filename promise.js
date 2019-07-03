const fsp = require('fs').promises;

const file = process.argv[2];

const readData = () => {
    const dataPromise = fsp.readFile(file);
    return dataPromise.then((data) => JSON.parse(data));
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = () => {
    readData()
        .then((data) => printData(data))
        .catch((e) => console.log('No such file'));
};

readAndPrintData();
