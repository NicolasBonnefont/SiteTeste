'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('/home')
Route.on('/empresa').render('/empresa')
Route.on('/MORERP').render('/MORERP')
Route.on('/MORBI').render('/MORBI')
Route.on('/MORTEMP').render('/MORTEMP')
Route.on('/orcamentos').render('/orcamentos')
Route.on('/PedidoDeVendas').render('/PedidoDeVendas')
Route.on('/NFe').render('/NFe')
Route.on('/RelatorioFaturamento').render('/RelatorioFaturamento')
Route.on('/contasapagar').render('/contasapagar')
Route.on('/contasareceber').render('/contasareceber')
Route.on('/RelatorioFinanceiro').render('/RelatorioFinanceiro')
Route.on('/RequisicaoCompras').render('/RequisicaoCompras')
Route.on('/PedidoCompras').render('/PedidoCompras')



// ROTA DA API DE EMAIL

Route.post('email', 'EmailController.store')
