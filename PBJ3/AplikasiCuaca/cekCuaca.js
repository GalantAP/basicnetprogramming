const request = require('postman-request');
const urlCuaca ='https://api.weatherstack.com/current?access_key=1e9da06300987ae65eb2b8a29c844ad9&query=-0.888046579860923,%20100.35332123901476&units=f';

request({ url: urlCuaca, json: true }, (error, response) => {
    if (error) {
        console.log('Tidak dapat menghubungi layanan cuaca.');
    } else if (response.body.error) {
        console.log('Terjadi kesalahan pada pencarian cuaca.');
    } else {
        console.log('Saat ini suhu di luar mencapai ' + 
        response.body.current.temperature + ' derajat celcius. Kemungkinan terjadinya hujan adalah ' + 
        response.body.current.precip + '%. Deskripsi cuaca: ' + 
        response.body.current.weather_descriptions[0] + '.');
    }
});
