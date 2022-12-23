import express from 'express';
const router = express.Router();
import createJHA from '../../models/CreateJHA.js';

router.delete('/:id', async (req, res) => {
  try {
    await createJHA
      .destroy({
        where: {
          id: req.params.id,
        },
      })
      .then(() => {
        res.json({ msg: 'Report Deleted' });
        res.send(200);
      })
      .catch((err) => {
        console.error(err.message);
        res.status(400);
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

export default router;
