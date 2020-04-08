async function enviaEmail() {
  event.preventDefault()

  axios.post('/email',
    {
      'nome': document.getElementById('nome').value,
      'email': document.getElementById('email').value,
      'texto': document.getElementById('texto').value,
      'telefone': document.getElementById('telefone').value
    })
    .then(function (response) {
      Swal.fire({
        allowOutsideClick: false,
        position: 'center',
        icon: 'success',
        title: 'Obrigado pela sua mensagem !',
        showConfirmButton: false,
        timer: 1800

      }).then((result) => {

       document.getElementById('formHome').reset()
      })
    })
    .catch(function (erro) {
      console.log(erro)
    })
}