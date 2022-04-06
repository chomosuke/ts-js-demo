import { Skill } from "./Skill";

export interface SubSkill extends Pick<Skill, 'id' | 'name'> {
    description?: string;
}
