// eslint-disable-next-line no-undef
const mongoose = require('mongoose');

// eslint-disable-next-line no-undef
mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', function () {
  console.log(`Connected to ${db.name} at ${db.host}:${db.port}`);
});