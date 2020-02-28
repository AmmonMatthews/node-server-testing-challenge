const express = require('express')

const People = require('./modules.js')

const router = express.Router();

router.get("/", (req, res) => {
    People.all()
        .then(people => {
            res.status(200).json(people)
        })
        .catch(({name, message, stack, code}) => {
            // console.log(err)
            res.status(404).json({name, message, stack, code})
        })
})

router.post("/", (req, res) => {
    People.add(req.body)
        .then(person => {
            res.status(201).json(person)
        })
        .catch(({name, message, stack, code}) => {
            // console.log()
            res.status(404).json({name, message, stack, code})
        })
})

router.delete("/:id", (req, res) => {
    const { id } = req.params
    People.remove(id)
        .then(removed => {
            res.status(200).json({del: `${removed} was removed`})
        })
        .catch(({name, message, stack, code}) => {
            // console.log(err)
            res.status(404).json({name, message, stack, code})
        })
})


module.exports = router