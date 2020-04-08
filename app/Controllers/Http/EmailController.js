'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with emails
 */
const Env = use('Env')
const Mail = use('Mail')
class EmailController {

  async store ({ request, response }) {
    try {
      const remetente = Env.get('EMAILPARA')
      const destinatario = Env.get('EMAILORIGEM')
      const copia = Env.get('EMAILCC1')   

      const {nome, email, texto, telefone} = await request.all()
      await Mail.send(
        // Caminho da View de Template do email
       ['emails.email'],       
        
        // Quando estiver com um dominio valido, usar a linha comentada
        //{usuario: user.name, email, token: user.token, link: url+`/resetpassword?token=${user.token}` },

        {nome, email,texto, telefone}, 
        message =>{
          message
          .to(remetente)
          .from(destinatario, 'Site', 'MorInfo')
          .cc(copia)          
          .subject('Mensagem do site MORINFO')
        }        
      )
      return response.status(200).send({ok:"Email enviado com Sucesso"})
      
    } catch (err) {
      console.log(err)
      return response.status(500).send({error: { message: 'Algo não deu certo! Este Email existe ?',err } } )
    }
    
  }
}

module.exports = EmailController
