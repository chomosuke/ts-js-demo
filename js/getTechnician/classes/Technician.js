let { Skill } = require("./Skill");
let { User } = require("./User");

class Technician extends User {
    constructor(props) {
        super(props);

        let skill = new Skill();

        skill.createSkillsToUser(this.id);

        this.skills = skill.getSkillsWithSubSkills();
    }

    getDetails() {
        return this;
    }
}

module.exports.Technician = Technician;
