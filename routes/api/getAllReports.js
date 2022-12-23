import express from 'express';
const router = express.Router();
import createJHA from '../../models/CreateJHA.js';

router.get('/', (req, res) => {
  try {
    createJHA
      .findAll()
      .then((allReports) => {
        console.log(allReports);
        res.json({ allReports });
        res.status(200);
      })
      .catch((err) => {
        console.log(err.message);
        res.status(400);
      });
  } catch (err) {
    console.error(err.message);
  }
});

export default router;
