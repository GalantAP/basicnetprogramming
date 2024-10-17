'use strict';

var connection = require('../koneksi');

// Menampilkan semua biodata
exports.showAllBiodata = function (req, res) {
    connection.query('SELECT * FROM tablemahasiswa', function (error, rows, fields) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error fetching data' });
        } else {
            res.json(rows);  // Menampilkan semua biodata dalam format JSON
        }
    });
};

// Menampilkan biodata berdasarkan ID
exports.showBiodataById = function (req, res) {
    let userId = req.params.id;
    connection.query('SELECT * FROM tablemahasiswa WHERE id = ?', [userId], function (error, row) {
        if (error) {
            console.log(error);
            res.status(500).send({ error: 'Error fetching data' });
        } else {
            if (row.length > 0) {
                res.json(row[0]);  // Menampilkan biodata berdasarkan ID
            } else {
                res.status(404).send({ message: 'Mahasiswa not found' });
            }
        }
    });
};
