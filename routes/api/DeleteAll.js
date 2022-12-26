import express from "express";
const router = express.Router();
import createJHA from "../../models/CreateJHA.js";

router.delete("/", async (req, res) => {
	try {
		await createJHA.destroy({ where: {}, truncate: true });
		res.send(200);
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
});

export default router;
