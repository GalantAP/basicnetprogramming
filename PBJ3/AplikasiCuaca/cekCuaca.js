const request = require('postman-request')
const urlCuaca ='https://api.weatherstack.com/current?access_key=1e9da06300987ae65eb2b8a29c844ad9&query=-0.888046579860923,%20100.35332123901476&units=m'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu diluar mencapai ' +
response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah' + response.body.current.precip
+ '%')
})
