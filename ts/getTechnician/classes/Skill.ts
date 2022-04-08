import { SubSkill } from './SubSkill';

export interface ISkill {
    id: number;
    name: string;
    subSkills: SubSkill[];
}

export class Skill {
    skills: ISkill[];
    
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
