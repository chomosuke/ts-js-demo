const { SubSkill } = require("./SubSkill");

class Skill {
    skills = [];
    
    constructor() {
        this.skills = [];
    }

    createSkillsToUser() {
        let defaultSkill = {
            id: 1,
            name: "Smoke Alarms",
            subSkills: SubSkill.listAll(),
        };

        this.skills.push(defaultSkill);
    }

    getSkillsWithSubSkills() {
        return this.skills;
    }
}

module.exports.Skill = Skill;
