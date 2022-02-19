const express = require("express");
const router = express.Router();
var { getAllCategory, getOneCategory, addCategory, updateCategory, deleteCategory}  = require("./Test");

router.get('/category', getAllCategory);
router.get('/category/:id', getOneCategory);
router.post('/category', addCategory);
router.patch('/category/:id', updateCategory);
router.delete('/category/:id', deleteCategory);

module.exports = router;