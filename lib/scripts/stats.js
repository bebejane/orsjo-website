const fs = require("fs");
const reqs = fs.readFileSync("./assets_path_requests.csv", "utf8");
const lines = reqs.split("\n").filter((line) => line.includes(".pdf"));

lines.forEach((line) => {
	const file = line.split(",")[0].replaceAll('"', "");
	const count = line.split(",")[1].replaceAll('"', "");
	console.log(count + " x " + file.substring(file.indexOf("-") + 1));
});
