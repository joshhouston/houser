const getProducts = (req, res, next) => {
        const db = req.app.get('db')

        db.get_inventory()
            .then(products => res.status(200).send(products))
            .catch(err => {
                res.status(500).send({errorMessage: 'Something went wrong'})
                console.log(err);
            })
     }

const addHouse = (req, res, next) => {
    const db = req.app.get('db');
    const {name, address, city, state, zipcode} = req.body

    db.add_house(name, address, city, state, zipcode)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
        })
}


     module.exports = {
         getProducts,
         addHouse
     }
    
