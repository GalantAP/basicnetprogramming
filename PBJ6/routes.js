'use strict';

module.exports = function (app) {
    var routeBiodata = require('./controller/usercontroller');

    // Route untuk mendapatkan semua biodata
    app.route('/pbj6').get(routeBiodata.showAllBiodata);

    // Route untuk mendapatkan biodata berdasarkan ID
    app.route('/pbj6/:id').get(routeBiodata.showBiodataById);
};
