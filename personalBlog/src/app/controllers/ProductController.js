const Product = require('../Model/ProductModel')
const {multipleMongooseToObject} = require('../../util/mongoose')
class ProductController {
   async  allProducts(req, res,next) {
     await Product.find({})
            .then(products =>{
                res.render('products/list',{
                    products:multipleMongooseToObject(products),
                })
            })
            .catch(next)
    }
}
module.exports = new ProductController();
