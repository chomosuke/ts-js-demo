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
        };

        this.skills.push(defaultSkill);
    }

    getSkillsWithSubSkills() {
        this.skills[0].subSkills = SubSkill.listAll();

        return this.skills;
    }
}

module.exports.Skill = Skill;
