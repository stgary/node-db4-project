const express = require('express');

const recipes = require('./recipe-model.js');

const router = express.Router();

router.get('/', (req, res) => {
  recipes.getRecipes()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  recipes.getShoppingList(id)
  .then(list => {
    if (list) {
      res.json(list);
    } else {
      res.status(404).json({ message: 'Could not find list with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get shopping list' });
  });
});

router.get('/:id/steps', (req, res) => {
  const { id } = req.params;

  recipes.getInstructions(id)
  .then(steps => {
    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given recipe' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get steps' });
  });
});

module.exports = router;