var uuid = require('uuid');
var moment = require('moment');

function fillDefaultFields(data, id = false) {
  data.updateddate = moment(new Date()).format('YYYY-MM-DD');   
  if (id && id === true) { // assume create query
    data.id = uuid.v4();
    data.createddate =  moment(new Date()).format('YYYY-MM-DD');   
    data.updateddate =  moment(new Date()).format('YYYY-MM-DD');   
  }
  return data;
}

module.exports = { fillDefaultFields };