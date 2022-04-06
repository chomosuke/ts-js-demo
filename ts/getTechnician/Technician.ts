import { Skill } from "./Skill";
import { User } from "./User";

export interface Technician extends User {
    type: TechnicianType;
    skills: Skill[];
}

export enum TechnicianType {
    smoke,
    electrical,
    gas,
}
