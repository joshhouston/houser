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
    const {name, address, city, state, zipcode} = req.body;
    console.log(name)

    db.add_house(name, address, city, state, zipcode)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
        })
}

const deleteHouse = (req, res, next) => {
    const db = req.app.get('db');
    const {id} = req.params;

    db.delete_house(id)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            res.status(500).send({errorMessage: 'Something went wrong'})
            console.log(err)
        })
}

     module.exports = {
         getProducts,
         addHouse,
         deleteHouse
     }
    
