const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  const payload = await Category.findAll({
    include: [Product]
  })
  res.json(payload);
});

router.get('/:id', async (req, res) => {
  const payload = await Category.findByPk(req.params.id,{
    include: [Product]
  })
  res.json(payload);
});

router.post('/', async (req, res) => {
  try {
    const payload = await Category.create(req.body)
    res.json(payload);
  } catch( err ) {
    res.status(500).json({ error: err.message })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const payload = await Category.update(
      req.body, 
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.json(payload)
  } catch( err ){
    res.status(500).json({ error: err.message })
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Category.destroy(
      {
        where: {
          id: req.params.id
        }
      }
    )
    res.json({ status: "ok" })
  } catch( err ){
    res.status(500).json({ error: err.message })
  }
});

module.exports = router;
