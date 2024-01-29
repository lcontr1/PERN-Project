const { Client } = require('pg');

// const woodworking = 'woodworkingplans';

const client = new Client(`postgres://woodworkingplans_user:XbWY9tqCWmtDy06r2sXHS4aGECgkbjGf@dpg-cmriehf109ks73fi6p30-a/woodworkingplans`);

module.exports = client;