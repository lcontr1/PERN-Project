const { Client } = require('pg');

const woodworking = 'woodworking_plans';

const client = new Client(`https://localhost:5432/${woodworking}`);

module.exports = client;