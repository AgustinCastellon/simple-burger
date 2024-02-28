const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/products.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const productsController = {
    index: (req, res) =>{
        res.render('products', {productos: products})
    },
    burgers: (req, res) =>{
        res.render('burgers', {productos: products})
    },
    detail: (req, res) =>{
        const id = req.params.id;
        const producDetail = products.find((products) => products.id == id);
        res.render('detail', {producDetail});
    },
    create: (req, res) =>{
        res.render('product-create-form');
    },
    store: (req, res) =>{
        let newId = products.at(-1).id+1;
        let newProduct= {
            id: newId,
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description
        
        }

        products.push(newProduct);

        fs.writeFileSync(
            path.join(__dirname, '../data/products.json'),
            JSON.stringify(products, null, 4),
            {
                encoding: 'utf-8'
            }    
        )
            console.log(newProduct);
        res.render('products', {products})

    }

}

module.exports = productsController;