const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(bodyParser.json({ limit: '10mb' }));

var routes = require('./routes');
routes(app);

app.listen(3224, () => {
  console.log('Server started on port 3224');
});
