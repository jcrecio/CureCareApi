exports.error = (message) => console.error(`${currentDateTime()}[ERROR]: ${message}`);
exports.warning = (message) => console.warning(`${currentDateTime()}[WARNING]: ${message}`);
exports.info = (message) => console.info(`${currentDateTime()}[INFO]: ${message}`);

function currentDateTime() {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date + ' ' + time;

    return dateTime;
}