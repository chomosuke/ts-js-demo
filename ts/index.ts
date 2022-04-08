import express from 'express';
import { SubSkill } from './getTechnician/classes/SubSkill';
import { getTechnician } from './getTechnician/getTechnician';

const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/allSubSkillsNameOfTechnician', (req, res) => {
    let names = getTechnician().skills.map((s) => s.subSkills).flat().map((subSkill) => subSkill.name);
    res.json({});
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
