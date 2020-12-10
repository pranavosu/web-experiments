import express from 'express';
var router = express.Router();
import { render } from '../render/render-app';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(render());
});

export default router;