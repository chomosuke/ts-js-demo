let express = require("express");
const { getTechnician } = require("./getTechnician/getTechnician");

const app = express();
const port = 80;

app.get("/", (req, res) => {
    let result = getTechnician();
    res.json(result);
});

app.get("/allSubSkillsNameOfTechnician", (req, res) => {
    let names = getTechnician().skills.map((s) => s.subSkills).flat().map((subSkill) => subSkill.name);
    res.json({});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
