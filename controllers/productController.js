const db = require('../models')

//create main model

const Product = db.products
const Review = db.reviews

// main work

// 1.create product

const addProduct = async(req,res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published :  false

    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}

//2.get all products

const getAllProducts = async(req, res) => {
    
    let products = await Product. findAll({ })
    res.status(200).send(products)
}

//3.get Single products

const getOneProduct = async(req, res) => {
    let id = req.params.id
    let product = await Product. findOne({where: { id: id} })
    res.status(200).send(product)
}

//4.update product

const updateProduct = async(req, res) => {

    let id = req.params.id

    const product = await Product. update(req.body, {where: { id: id} })
    res.status(200).send(product)
}


//4.Delete product

const deleteProduct = async(req, res) => {

    let id = req.params.id

    await Product. destroy({ where: { id: id} })
    res.status(200).send('Product is deleted!')
}

module.exports = {
    addProduct,
    getAllProducts,
    getOneProduct,
    updateProduct,
    deleteProduct
}