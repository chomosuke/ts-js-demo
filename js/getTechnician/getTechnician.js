export function getTechnician() {
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
        type: smoke,
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

export const smoke = 'smoke';
export const gas = 'gas';
export const electrical = 'electrical';
