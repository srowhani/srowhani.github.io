const fs = require('fs');
const template = require('./index');
var pdf = require('html-pdf');

const resume = JSON.parse(fs.readFileSync('./public/resume.json'));
const rendered = template.render(resume);

fs.writeFileSync('./resume/index.html', rendered);
