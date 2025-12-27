const express = require('express');
const Product = require('../models/product.model.js');
const router = express.Router();
const {getProducts, getSingleProduct, postEntry, updateEntry, deleteEntry} = require('../controllers/product.controller.js')

router.get('/', getProducts);
router.get('/:id', getSingleProduct);
router.post('/', postEntry);
router.put('/:id', updateEntry);
router.delete('/:id', deleteEntry);


module.exports = router;