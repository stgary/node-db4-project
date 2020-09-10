const express = require('express');

const db = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    db.getRecipes()
        .then(recipe => {
            res.json(recipe);
        })
        .catch(error => {
            res.status(500).json({
                error: 'oops! something went wrong :('
            })
        });
});

router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;

    db.getShoppingList(id)
        .then(list => {
            if(list) {
                res.json(list);
            } else {
                res.status(404).json({
                    error: 'could not find the list with the specified ID :('
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error: 'oops! something went wrong :('
            })
        });
        
});

router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;

    db.getInstructions(id)
        .then(instructions => {
            if(instructions) {
                res.json(instructions);
            } else {
                res.status(404).json({
                    error: 'could not find the instructions with the specified ID :('
                })
            }
        })
        .catch(error => {
            res.status(500).json({
                error: 'oops! something went wrong :('
            })
        });
});

module.exports = router;