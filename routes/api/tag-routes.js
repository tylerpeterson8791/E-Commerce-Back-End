const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  const payload = await Tag.findAll()
  res.json(payload);
});

router.get('/:id', async (req, res) => {
  const payload = await Tag.findByPk(req.params.id)
  res.json(payload);
});

router.post('/', async (req, res) => {
  try {
    const payload = await Tag.create(req.body)
    res.json(payload);
  } catch( err ) {
    res.status(500).json({ error: err.message })
  }
});

router.put('/:id', async (req, res) => {
  try {
    const payload = await Tag.update(
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
    await Tag.destroy(
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
})

module.exports = router;
