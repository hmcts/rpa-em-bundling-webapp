'use strict';

const router = require('express').Router();

router.get("/bundle-documents", (req, res) => {
  res.send([
  { id: 1, name: 'Marriage Certificate', order: 2},
  { id: 2, name: 'Divorce Order', order: 3},
  { id: 3, name: 'Non-molestation Order', order: 4},
  { id: 4, name: 'Divorce Certificate', order: 1},
  { id: 5, name: 'Evidence 1', order: 5},
  { id: 6, name: 'Evidence 2', order: 6},
]);
});

module.exports = router;
