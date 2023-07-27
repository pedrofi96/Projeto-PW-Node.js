const express = require('express');
const app = express();

// configuração do bodyParser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const NovoUsuario = require('./models/NovoUsuario.js')
const path = require('path');
app.use(express.json())


// Configuração do handlebars
var { engine } = require('express-handlebars');
app.engine('handlebars', engine())
app.set('view engine', ' handlebars')
app.set('views', './views')

// Consumo de páginas conteudo estático
app.use('/css', express.static(path.join(__dirname, 'node_modules/uikit/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/uikit/dist/js')))
app.use(express.static('src'));
app.use("/assets", express.static('assets'));



//  Rotas  da aplicação (GET)
app.get("/", function (req, res) {
   res.sendFile(path.join(__dirname, "/src/html/index.html"))
})
app.get("/mesas", function (req, res) {
   res.sendFile(path.join(__dirname, "/src/html/mesas.html"))
})
app.get("/cadeira", function (req, res) {
   res.sendFile(path.join(__dirname, "/src/html/cadeira.html"))
})
app.get("/decoracao", function (req, res) {
   res.sendFile(path.join(__dirname, "/src/html/decoracao.html"))
})
app.get("/login", function (req, res) {
   res.sendFile(path.join(__dirname, "/src/html/login.html"))
   verificar = true;
})
app.get("/cadastrar", function (req, res) {
   res.render("cadastrar.handlebars")

})
app.get("/cadastrado", function (req, res) {
   res.render("cadastrado.handlebars")

})

// Pegando dados do formulario de cadastro(POST)
app.post('/add', function (req, res) {

   NovoUsuario.create({
      email: req.body.email,
      senha: req.body.senha
   }).then(function () {
      res.redirect("/cadastrado")
   }).catch(function (error) {
      res.send("POST deu erro de:" + error)
   })

})

// start do backend
app.listen(8080, function () {
   console.log("servidor rodando porta 8080")
})

