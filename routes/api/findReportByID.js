import express from 'express';
const router = express.Router();
import createJHA from '../../models/CreateJHA.js';

router.get('/:id', async (req, res) => {
  try {
    await createJHA
      .findOne({
        where: { id: req.params.id },
      })
      .then((data) => {
        res.json(data);
        res.send(200);
      })
      .catch((err) => {
        console.error(err.message);
        res.send(400);
      });
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
