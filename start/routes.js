'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('/home')
Route.on('/Empresa').render('/Empresa')
Route.on('/MORERP').render('/MORERP')
Route.on('/MORBI').render('/MORBI')
Route.on('/MORTEMP').render('/MORTEMP')
Route.on('/Orcamentos').render('/Orcamentos')
Route.on('/PedidoDeVendas').render('/PedidoDeVendas')
Route.on('/NFe').render('/NFe')
Route.on('/RelatorioFaturamento').render('/RelatorioFaturamento')
Route.on('/Contasapagar').render('/Contasapagar')
Route.on('/Contasareceber').render('/Contasareceber')
Route.on('/RelatorioFinanceiro').render('/RelatorioFinanceiro')
Route.on('/RequisicaoCompras').render('/RequisicaoCompras')
Route.on('/PedidoCompras').render('/PedidoCompras')
Route.on('/Qualidade').render('/Qualidade')
Route.on('/Estoque').render('/Estoque')
Route.on('/RelatorioCompras').render('/RelatorioCompras')





// ROTA DA API DE EMAIL

Route.post('email', 'EmailController.store')
