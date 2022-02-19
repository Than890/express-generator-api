const { getAll, getOne, add, update, deleteOne } = require("../controllers/TestApi");

function getAllCategory(req, res , next) {
  getAll()
  .then((response) => {
    res.json({
      'status': "success",
      'data': response.data
    });
  })
  .catch((err) => {
    res.json({
      'status': "fail",
      'data': err
    });
  });
}
function getOneCategory(req, res , next) {
  getOne(req.params.id)
  .then((response) => {
    res.json({
      'status': "success",
      'data': response.data
    });
  })
  .catch((err) => {
    res.json({
      'status': "fail",
      'data': err
    });
  });
}

function addCategory (req, res, next) {
  add(req.body)
  .then((data )=> {
    res.json({
      'status': "success",
      'data': data.data
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`)
    res.json({
      status: "fail",
      data: err
    })
  });
}

function updateCategory (req, res, next) {
  update(req.params.id, req.body)
  .then((data)=> {
    res.json({
      'status': "success",
      'data': data.data
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`)
    res.json({
      status: "fail",
      data: err
    })
  });
}

function deleteCategory (req, res, next) {
  deleteOne(req.params.id)
  .then((data )=> {
    res.json({
      'status': "success",
      'data': data.data
    });
  })
  .catch((err) => {
    console.log(`Error ${err}`)
    res.json({
      status: "fail",
      data: err
    })
  });
}

module.exports = { getAllCategory, getOneCategory, updateCategory, addCategory, deleteCategory };