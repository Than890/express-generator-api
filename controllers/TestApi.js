const connection = require("../database/connection");
const connection2 = require("../database/connection2");
const { fillDefaultFields } = require('../lib/common');
async function getAll() {
    let resultdata = {};
    await connection.promise().query("SELECT * FROM tbl_categories")
    .then(result => {
        console.log(result[0])
         resultdata.data = result[0];
    });
    return resultdata;
}
async function getOne(id) {
    let resultdata = {};
    await connection.promise().query(` SELECT * FROM tbl_categories WHERE id = '${id}'`)
    .then(result => {
        console.log(result[0])
         resultdata.data = result[0];
    });
    return resultdata;
}

async function add(data){
    fillDefaultFields(data, true);
    console.log(data);
    let resultdata = {};
    await connection2.insert("tbl_categories", data)
    .then((result) => {
        resultdata.data =  "Successfully created data.";
    })
    return resultdata;
}

async function update (id , data){
    fillDefaultFields(data);
    let resultdata = {};
    let updateddata = '';
    Object.entries(data).forEach(([key, value]) =>
        updateddata += key + '=' + "'" + value + "',"
    );
    updateddata = updateddata.slice(0,-1);
    await connection.promise().query("UPDATE tbl_categories SET " + updateddata + " WHERE id = '" + id + "'")
        .then((result) => {
            resultdata.data = "Successfully edited data.";
        })
    return resultdata;
}

async function deleteOne (id) {
    let resultdata = {};
    await connection2.delete('tbl_categories', {id: id})
    .then((result) => {
        resultdata.data =  "Successfully deleted data.";
    })
    return resultdata;
}

module.exports = { getAll, getOne, update, add, deleteOne };