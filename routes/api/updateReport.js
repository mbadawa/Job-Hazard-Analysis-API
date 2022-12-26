import express from "express";
const router = express.Router();
import createJHA from "../../models/CreateJHA.js";

router.put("/:id", async (req, res) => {
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
		await createJHA.update(
			{
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
			},
			{
				where: { id: req.params.id },
			}
		);
		res.send(200);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

export default router;
