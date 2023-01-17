const express = require("express");
const { addAllTransaction, getAllTransaction, editTransaction, deleteTransaction } = require("../controllers/transactionCtrl");


//router object
const router = express.Router();

//routers

//add transaction POST METHOD
router.post("/add-transaction", addAllTransaction);

//edit transaction POST METHOD
router.post("/edit-transaction", editTransaction);

//delete transaction POST METHOD
router.post("/delete-transaction", deleteTransaction);

//get transaction GET METHOD

router.post('/get-transaction', getAllTransaction)


//export
module.exports = router;




