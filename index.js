const express = require('express');
const hbs = require('hbs');

const homePage = require('./routers/homePage')
const ProductRouter = require("./routers/product");


const app = express();

app.use(express.urlencoded({ extended: true}))
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.use('/', homePage);
app.use("/products", ProductRouter);

// app.get('/', (req, res) => {
// });


app.listen(3000, () => {
    console.log('hi');

})