const { default: axios } = require('axios');
const fs = require('fs');
require('dotenv').config({
  path: '.env.production',
});

const BREATHECODE_HOST = process.env.BREATHECODE_HOST || 'https://breathecode-test.herokuapp.com';
const SYLLABUS = process.env.SYLLABUS || 'full-stack,web-development';
const whiteLableAcademies = process.env.WHITE_LABLE_ACADEMY;

async function generateSyllabus() {
  const whiteLableArray = whiteLableAcademies?.length > 0 ? whiteLableAcademies.split(',') : [];

  if (whiteLableArray?.length > 0) {
    const logoData = await axios.get(`${BREATHECODE_HOST}/v1/admissions/academy/${whiteLableArray[0]}`)
      .then((resp) => resp?.data);

    if (logoData?.name) {
      fs.writeFileSync('public/logo.json', JSON.stringify(logoData));
    }
  }

  const data = await axios.get(`${BREATHECODE_HOST}/v1/admissions/public/syllabus?slug=${SYLLABUS}`)
    .then((res) => res.data);

  const paths = data?.length > 0 ? `[
    ${data.map((item) => `{"label": "${item.name}", "href": "/read/${item.slug}"}`).join(',')}
  ]` : '[]';

  fs.writeFileSync('public/syllabus.json', JSON.stringify(paths));
}

generateSyllabus();
