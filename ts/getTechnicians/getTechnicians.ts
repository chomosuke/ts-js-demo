import { SubSkill } from "./SubSkill";
import { Technician, TechnicianType } from "./Technician";

export function getTechnicians(): Technician {
    const subSkills: SubSkill[] = [
        {
            id: 1,
            name: 'climb up large ladder',
        },
        {
            id: 1,
            name: 'climb down large ladder',
            description: 'many people can only climb up and can\'t climb down',
        },
    ];
    return {
        type: TechnicianType.smoke,
        name: 'richard',
        id: 1,
        skills: [
            {
                id: 1,
                name: 'large ladder',
                subSkills: subSkills,
            }
        ]
    }
}
