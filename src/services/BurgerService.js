const fakeDB = {
    burgers: [
        { name: 'The Kraken', description: 'This monster of a burger patty has meat straight from a Kraken', price: '50', id: '1' },
        { name: 'Ectoplasm', description: 'The sauce of this burger is locally sourced from your neighborhood ghost busters', price: '20', id: '2' },
        { name: 'Zomburger', description: 'Patty comprised of the finest ground brains for all you folks that refuse to expire', price: '35', id: '3' },

    ]
}

class BurgerService {

    getBurger() {
        const burgers = fakeDB.burgers
        return burgers
    }

    createBurger(payload) {
        const burger = payload
        burger.id = fakeDB.burgers[fakeDB.burgers.length - 1].id + 1
        fakeDB.burgers.push(burger)
    }
}

export const burgerService = new BurgerService()