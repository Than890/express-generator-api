const QueryBuilder = require('node-querybuilder');
const settings = {
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASS,
};
const connection2 = new QueryBuilder(settings, 'mysql', 'single');

module.exports =  connection2;