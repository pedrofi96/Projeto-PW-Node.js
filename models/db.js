const Sequelize = require('sequelize')
// Conexão com o banco Mysql
const sequelize = new Sequelize('usuario','root','',{
   host:"localhost",
   dialect:"mysql"
})
sequelize.authenticate().then(function(){
   console.log("conectado com sucesso ao banco de dados")
}).catch(function(error){
   console.log("Falha ao se conectar ao banco de dados" + error)
})
module.exports={
   Sequelize:Sequelize,
   sequelize:sequelize
}



