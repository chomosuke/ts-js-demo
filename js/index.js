let express = require("express");
const { getTechnician } = require("./getTechnician/getTechnician");

const app = express();
const port = 80;

app.get("/", (req, res) => {
    let result = getTechnician();
    res.json(result);
});

app.get("/allSubSkills", (req, res) => {
    res.send("Hello World!");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
