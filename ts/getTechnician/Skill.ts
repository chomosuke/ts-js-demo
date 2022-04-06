import { SubSkill } from "./SubSkill";

export interface Skill {
    id: number;
    name: string;
    subSkills: SubSkill[];
}
