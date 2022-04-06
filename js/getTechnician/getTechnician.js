"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTechnicians = void 0;
const Technician_1 = require("./Technician");
function getTechnician() {
    const subSkills = [
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
        type: Technician_1.TechnicianType[0],
        name: 'richard',
        id: 1,
        skills: [
            {
                id: 1,
                name: 'large ladder',
                subSkills: subSkills,
            }
        ]
    };
}
exports.getTechnician = getTechnician;
