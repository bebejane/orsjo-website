const path = require("path");
const fs = require("fs");

console.log("Merging Css files...");

const CSS_PATH = path.resolve(__dirname, "./.next/static/css");
const CSS_FILENAMES = fs.readdirSync(CSS_PATH);

const GLOBAL_CSS_FILENAME = CSS_FILENAMES.find((file) => {
	const FILE_PATH = path.join(CSS_PATH, file);
	const data = fs.readFileSync(FILE_PATH, "utf8");
	return data.startsWith("/*! normalize.css");
});

const GLOBAL_CSS_PATH = path.join(CSS_PATH, GLOBAL_CSS_FILENAME);

CSS_FILENAMES.filter((name) => name !== GLOBAL_CSS_FILENAME).forEach((file) => {
	const FILE_PATH = path.join(CSS_PATH, file);
	const data = fs.readFileSync(FILE_PATH, "utf8");
	fs.appendFileSync(GLOBAL_CSS_PATH, data);
	fs.truncate(FILE_PATH, 0, () => {});
});
