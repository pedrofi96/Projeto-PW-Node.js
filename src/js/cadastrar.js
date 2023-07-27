function ValidarCadastro(event) {
   let CadastrarUsuario = false
   event.preventDefault();
   const errorSubmitDados = document.querySelector('.errorSubmitDados')
   const inputs = document.querySelectorAll('.inputDados');
   const senha = document.querySelector('#senha').value.trim();
   const confirmarSenha = document.querySelector('#confirmarSenha').value.trim();
   let empty = false;
   inputs.forEach(input => {
      if (input.value == "") empty = true;
   })
   let arraySenha = senha.split('')
   let senhaComNumero = false;
   let senhaComLetra = false;
   arraySenha.forEach(item => {
      if (!isNaN(item)) senhaComNumero = true;
      if (isNaN(item)) senhaComLetra = true;
   })
   if (empty) {
      errorSubmitDados.classList.remove('alertSucess')
      errorSubmitDados.classList.add('alertImputEmpty')
      errorSubmitDados.textContent = "Preencha todos os Campos!"
   } else if (senha != confirmarSenha) {
      errorSubmitDados.classList.remove('alertSucess')
      errorSubmitDados.classList.add('alertImputEmpty')
      errorSubmitDados.textContent = "Senhas não Conferem!"
   } else if (arraySenha.length < 5) {
      errorSubmitDados.classList.remove('alertSucess')
      errorSubmitDados.classList.add('alertImputEmpty')
      errorSubmitDados.textContent = "A senha deve conter no minimo 5 caracters!"
   } else if (senhaComNumero == false || senhaComLetra == false) {
      errorSubmitDados.classList.remove('alertSucess')
      errorSubmitDados.classList.add('alertImputEmpty')
      errorSubmitDados.textContent = "A senha tem que ter ao menos 1 número e 1 letra!"
   } else if (senha == confirmarSenha && empty == false && senhaComNumero && senhaComLetra) {
      CadastrarUsuario = true
      errorSubmitDados.classList.add('alertSucess')
      errorSubmitDados.textContent = "Usuario cadastrado com sucesso!"
      

   }
   module.exports = CadastrarUsuario
}






