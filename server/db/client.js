const { Client } = require('pg');

const woodworking = 'woodworkingplans';

const client = new Client(`postgres://localhost:5432/${woodworking}`);

module.exports = client;