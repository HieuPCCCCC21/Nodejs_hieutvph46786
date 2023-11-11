const newsRouter = require('./new');
const siteRouter = require('./site');
const productsRouter = require('./product');

function route(app) {
    app.get('/products', productsRouter);
    app.get('/news', newsRouter);
    app.get('/', siteRouter);
}

module.exports = route;
