import { burgerService } from "../services/BurgerService.js";
import BaseController from "../utils/BaseController.js";
import { logger } from "../utils/Logger.js";




export class BurgerController extends BaseController {
    constructor() {
        console.log('🍔 Burger Controller')
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .post('', this.createBurger)
    }


    getBurgers(request, response, next) {
        try {
            const burgers = burgerService.getBurger()
            response.send(burgers)
        } catch (error) {
            next(error)
        }
    }

    createBurger(request, response, next) {
        try {
            const payload = request.body
            logger.log('request body', payload)
            const burger = burgerService.createBurger(payload)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }



}