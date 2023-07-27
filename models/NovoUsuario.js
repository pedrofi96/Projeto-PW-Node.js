const db = require('./db')

const NovoUsuario = db.sequelize.define('NovoUsuario',{
   email:{
      type:db.Sequelize.STRING
   },
   senha:{
      type:db.Sequelize.TEXT
   }

})
module.exports = NovoUsuario;
