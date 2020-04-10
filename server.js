const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const port = process.env.PORT || 3001;

const app = express();

require('dotenv').config();
require('./config/database');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());

app.use('/api/users', require('./routes/api/users'));

app.listen(port, () => {
	console.log(`Express is listening on port ${port}`);
});

module.exports = app;
