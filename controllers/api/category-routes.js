const router = require('express').Router();
const { Category } = require('../../models');
const withAuth = require('../../utils/auth');

// GET /api/categories
router.get('/', (req, res) => {
    Category.findAll()
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// GET /api/categories/1
router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbCategoryData => {
      if (!dbCategoryData) {
        res.status(404).json({ message: 'No category found with this id' });
        return;
      }
      res.json(dbCategoryData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST /api/categories
router.post('/', withAuth, (req, res) => {
    Category.create({
      category_name: req.body.category_name
    })
      .then(dbCategoryData => res.json(dbCategoryData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// PUT /api/categories/1
router.put('/:id', withAuth, (req, res) => {
    Category.update(req.body, {
      where: {
        id: req.params.id
      }
    })
      .then(dbCategoryData => {
        if (!dbCategoryData[0]) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

// DELETE /api/category/1
router.delete('/:id', withAuth, (req, res) => {
    Category.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbCategoryData => {
        if (!dbCategoryData) {
          res.status(404).json({ message: 'No category found with this id' });
          return;
        }
        res.json(dbUCategoryData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;