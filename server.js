import express from "express";
import mysql from "mysql";
import dotenv from "dotenv";
import createJHA from "./routes/api/createJHA.js";
import getAllReports from "./routes/api/getAllReports.js";
import deleteReportByID from "./routes/api/deleteReportByID.js";
import updateReport from "./routes/api/updateReport.js";
import findReportByID from "./routes/api/findReportByID.js";
import DeleteAll from "./routes/api/DeleteAll.js";
const app = express();

// Connects to database
dotenv.config();
const mysqlDatabase = mysql.createConnection({
	host: process.env.DB_HOST,
	user: process.env.DB_USERNAME,
	database: process.env.DB_DATABASE,
	password: process.env.DB_PASSWORD,
});
mysqlDatabase.connect((err) => {
	if (err) {
		console.error(err.message);
	} else {
		console.log("connected to the database");
	}
});
// Allow CORS
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

	next();
});
// Init MiddleWare
app.use(
	express.json({
		extended: false,
	})
);

app.get("/", (req, res) => res.json({ msg: "Hello world!!!" }));

// Define Routes

app.use("/api/createJHA", createJHA);
app.use("/api/getAllReports", getAllReports);
app.use("/api/delete/", deleteReportByID);
app.use("/api/update/", updateReport);
app.use("/api/findreport/", findReportByID);
app.use("/api/deleteAll/", DeleteAll);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
