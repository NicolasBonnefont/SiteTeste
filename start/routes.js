'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('/home')
Route.on('/empresa').render('/empresa')
Route.on('/MORERP').render('/MORERP')
Route.on('/MORBI').render('/MORBI')
Route.on('/MORTEMP').render('/MORTEMP')



// ROTA DA API DE EMAIL

Route.post('email', 'EmailController.store')