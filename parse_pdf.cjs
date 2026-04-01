const fs = require('fs');
const pdfParse = require('pdf-parse');

const dataBuffer = fs.readFileSync('Yusuf_Eren_Resume.pdf');
const parser = typeof pdfParse === 'function' ? pdfParse : pdfParse.default;
parser(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(e => {
    console.error("Error parsing layout:", e);
});
