const router = require('express').Router();
let Products = require('../models/products.model');


//get all items
router.route('/').get((req, res, next) => {
    Products.find()
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//get item by id
router.route('/:id').get((req, res, next) =>{
    Products.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});

//delete item
router.route('/:id').delete((req, res) => {
    Products.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add item
router.route('/addProduct').post((req, res, next) => {
    const item = req.body.item;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const qty = req.body.qty;


    const newItem = new Products({
        item,
        imageUrl,
        price,
        qty
    });

    newItem.save()
        .then(() => res.json('New Product Added!!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//update Item

router.route('/addProduct/:id').put((req, res, next) =>{
    Products.findById(req.params.id)
        .then(item => {
            item.item = req.body.item,
                item.imageUrl = req.body.imageUrl,
                item.price = req.body.price,
                item.qty = req.body.qty

            item.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;