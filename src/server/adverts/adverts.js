const router = require('express').Router();
const db = require('../db/db');

const newAdvert = (...args) => ({
  id: String(Math.random()
    .toString(16)
    .split('.')[1]),
  args,
  isRemovable: true
});

// GET /adverts
router.get('/', (req, res) => {
  const adverts = db.get('adverts').value();
  res.json({
    status: 'OK',
    data: adverts
  });
});

// GET /adverts/:id
router.get('/:id', (req, res) => {
  const advert = db
    .get('adverts')
    .find({
      id: req.params.id
    })
    .value();

  res.json({
    status: 'OK',
    data: advert
  });
});

// POST /adverts/new
router.post('./new', (req, res, next) => {
  const advert = newAdvert(req.body.text);

  console.log(advert);

  db
    .get('adverts')
    .push(advert)
    .write();

  res.json({
    status: 'OK',
    data: advert
  });
  next();
});

// PATCH /tasks/:id
router.patch('/:id', (req, res, next) => {
  const advert = db
    .get('adverts')
    .find({
      id: req.params.id
    })
    .assign(req.body)
    .value();

  db.write();

  res.json({
    status: 'OK',
    data: advert
  });
  next();
});

// DELETE /adverts/:id
router.delete('/:id', (req, res) => {
  db
    .get('adverts')
    .remove({
      id: req.params.id
    })
    .write();

  res.json({
    status: 'OK'
  });
});

module.exports = router;
