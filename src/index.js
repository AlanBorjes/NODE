const express = require ('express');
const morgan = require('morgan');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

app.use(require('./routes/index.js'));
app.use('/products',require('./routes/products.js'));

app.listen(app.get('port'), () => {
    console.log("server on port", app.get('port'));
});