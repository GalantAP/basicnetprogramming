const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const direktoriPublic = path.join(__dirname, '../public');
const direktoriViews = path.join(__dirname, '../templates/views');
const direktoriPartials = path.join(__dirname, '../templates/partials'); // Pastikan path ini benar

// Mengatur view engine dan direktori views
app.set('view engine', 'hbs');
app.set('views', direktoriViews);
hbs.registerPartials(direktoriPartials); // Pastikan Anda meregister partials dengan path yang benar

// Menggunakan direktori public untuk file statis
app.use(express.static(direktoriPublic));

// Halaman utama
app.get('/', (req, res) => {
    res.render('index', {
        judul: 'Aplikasi Cek Cuaca',
        nama: 'Galant Anefsyah Pratama'
    });
});

// Halaman tentang
app.get('/tentang', (req, res) => {
    res.render('tentang', {
        judul: 'Tentang Saya',
        nama: 'Galant Anefsyah Pratama'
    });
});

// Halaman infoCuaca
app.get('/infoCuaca', (req, res) => {
    res.render('infoCuaca', {
        judul: 'Aplikasi Info Cuaca',
        nama: 'Galant Anefsyah Pratama'
    });
});

// Halaman bantuan
app.get('/bantuan', (req, res) => {
    res.render('bantuan', {
        judul: 'Halaman Bantuan',
        nama: 'Galant Anefsyah Pratama'
    });
});

// Menjalankan server di port 4000
app.listen(4000, () => {
    console.log('Server berjalan pada port 4000.');
});
