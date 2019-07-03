const fsp = require('fs').promises;

const file = process.argv[2];

const readData = async () => {
    const data = await fsp.readFile(file);
    return JSON.parse(data);
};

const printData = (data) => {
    console.log(data);
};

const readAndPrintData = async () => {
    try {
        const data = await readData();
        printData(data);
    } catch (e) {
        console.log('No such file');
    }
};

readAndPrintData();