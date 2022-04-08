let { Skill } = require("./Skill");
let { User } = require("./User");

class Technician extends User {
    constructor(props) {
        super(props);
    }

    getDetails() {
        let skill = new Skill();

        skill.createSkillsToUser(this.id);

        this.skills = skill.getSkillsWithSubSkills();

        return this;
    }
}

module.exports.Technician = Technician;
