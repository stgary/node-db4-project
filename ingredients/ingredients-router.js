const express = require('express');

const db = require('./ingredients-model');

const router = express.Router();

router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;

    db.getRFI(id)
        .then(recipes => {
            res.status(200).json(recipes)
        })
        .catch(error => {
            res.status(500).json({
                error: 'oops! something went wrong :('
            })
        });
});

module.exports = router;