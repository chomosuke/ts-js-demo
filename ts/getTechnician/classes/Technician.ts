import { ISkill, Skill } from './Skill';
import { IProps, User } from './User';

export class Technician extends User {
    skills: ISkill[];
    
    constructor(props: IProps) {
        super(props);

        let skill = new Skill();

        skill.createSkillsToUser();
        
        this.skills = skill.getSkillsWithSubSkills();
    }

    getDetails() {
        return this;
    }
}
