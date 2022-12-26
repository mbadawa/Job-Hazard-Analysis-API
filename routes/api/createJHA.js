import express from 'express';
const router = express.Router();
import { check, validationResult } from 'express-validator';
import createJHA from '../../models/CreateJHA.js';

router.post(
  '/',
  [
    check('fullName', 'Full name is required').not().isEmpty(),
    check('superVisorName', 'Supervisor name is required').not().isEmpty(),
    check('companyName', 'Company name is required').not().isEmpty(),
    check('projectName', 'Project name is required').not().isEmpty(),
    check('projectDate', 'Project date is required').not().isEmpty(),
    check('operation', 'Operation title is required').not().isEmpty(),
    check('departmentOrUnit', 'Department/Unit title is required')
      .not()
      .isEmpty(),
    check('location', 'Location is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      fullName,
      superVisorName,
      companyName,
      projectName,
      projectDate,
      operation,
      departmentOrUnit,
      location,
      indoorOrOutdoor,
      trainingRequired,
      ppeRequired,
      equipmentUsed,
      chemicalsUsed,
      additionalComments,
      employees,
      analysis,
    } = req.body;

    try {
      let createNewReport = new createJHA({
        fullName,
        superVisorName,
        companyName,
        projectName,
        projectDate,
        operation,
        departmentOrUnit,
        location,
        ppeRequired,
        indoorOrOutdoor,
        trainingRequired,
        equipmentUsed,
        chemicalsUsed,
        additionalComments,
        employees,
        analysis,
      });
      await createNewReport.save();
      res.send(200);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

export default router;
