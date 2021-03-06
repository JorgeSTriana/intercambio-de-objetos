const express = require('express')
const router = express.Router()
/* const msg = require('../helpers/messages')
const User = require('../models/user')
const authService = require('../services/auth.service') */
const authController = require('../controllerrs/authController')
const { check } = require('express-validator')
const { profile } = require('../controllers/auth.controller')

/**
 * @api {get} /profile Perfil del usuario
 * @apiName Perfil
 * @apiDEscription Perfil del ususario logueado
 * @apiGroup Data
 */

router.get('/profile', authController/profile)

/**
 * @api {post} /auth/register Registro de usuarios
 * @apiName Registro
 * @apiGroup AUTH
 * @apiDescription Registro de usuarios usando los campos nombre, email, password
 * @apiParam {string} name Nombre del usuario que se registra
 * @apiParam {email} email E-mail del usuario que se registra
 * @apiParam {password} password Contraseña del usuario 
 * @apiParamExample {json} Request-Example:
 *          {
 *              "name": "Carlos Andres",
 *              "email": carlos@carlos.com,
 *              "password": "Contraseña123"
 *          }
 * @apiPermission none
 * @apiSuccess {json} token token de acceso del usuario
 * @apiSuccessExample {json} Success-Response
 * HTTP/1.1 200 ok
 * {
 *      "token": {
 *          "userData": {
 *              "name": "Carlos Andres",
 *              "email": "carlos@carlos.com",
 *              "password": "$2b$10$BWCEDtx9xZurEp.k0pn0COVIDa1qI0igSBJoeV2GlUCHPLGXGKZpC",
 *              "_id": "618d7a3b7f6279ed49403d78",
 *              "__v": 0
 *          },
 *          "code": 200,
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MThkN2EzYjdmNjI3OWVkNDk0MDNkNzgiLCJpYXQiOjE2MzY2NjE4MjAsImV4cCI6MTY2ODE5NzgyMH0.g12i5dNmoINmGWZohwfqOkUwHQFsIwNBt0OZwKLiDcM"
 *      }
 *  }
 *@apiError (200) Error El email debe ser único
 *@apiErrorExample {json} Error-Response
 *HTTP/1.1 200 ok
 *{
 *    "token": {
 *        "index": 0,
 *        "code": 11000,
 *        "keyPattern": {
 *            "email": 1
 *        },
 *        "keyValue": {
 *            "email": "carlos@carlos.com"
 *        }
 *    }
 *}
 *@apiError (200) Error El email es requerido
 *@apiErrorExample {json} Error-Response-Example
 *HTTP/1.1 200 ok
 *{
 *  "token": {
 *      "errors": {
 *          "email": {
 *              "name": "ValidatorError",
 *              "message": "Path `email` is required.",
 *              "properties": {
 *                  "message": "Path `email` is required.",
 *                  "type": "required",
 *                  "path": "email"
 *              },
 *              "kind": "required",
 *              "path": "email"
 *          }
 *      },
 *      "_message": "user validation failed",
 *      "name": "ValidationError",
 *      "message": "user validation failed: email: Path `email` is required."
 *  }
 * */

router.post('/register',[
    check( 'name', 'Nombre no valido, minimo 2 caracteres, máximo 40 caracteres').isLength({min: 2, max: 40}),    
    check('email', 'Email no valido').isEmail(),
    check('password', 'Contraseña debil')/* .isStrongPassword() */
],
//aqui va la funcion desde authController
authController.register
)

/**
 * @api {post} /auth/login Ingreso de usuarios
 * @apiName Login
 * @apiGroup AUTH
 * @apiDescription Ingreso de usuarios a la plataforma usando los campos email y password
 * @apiParam {email} email E-mail del usuario que ingresa
 * @apiParam {password} password Contraseña del usuario 
 * @apiSampleRequest https://swobject.herokuapp.com/auth/login
 * */

router.post('/login', authController.login)

module.exports = router