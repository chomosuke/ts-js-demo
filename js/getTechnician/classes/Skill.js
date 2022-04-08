const { SubSkill } = require("./SubSkill");

export class Skill {
    skills = [];

    constructor(userId) {
    }

    createSkillsToUser(userId) {
        let defaultSkill = {
            id: 1,
            name: "Smoke Alarms",
        };
        
        skills.push(defaultSkill);
    }

    getSkillsWithSubSkills() {
        skills[0].subSkills = SubSkill.listAll();

        return skills;
    }
}
