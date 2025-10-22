const express = require("express");
const { engine } = require("express-handlebars");
const path = require("path");
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

// Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main', extname: '.handlebars' }));
app.set('view engine', 'handlebars');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bootstrap', express.static('./node_modules/bootstrap/dist'));

// Rotas
app.use('/', produtoRoutes);

// Servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
