export class SubSkill {
    static listAll(): ISubSkill[] {
        return [
            {
                id: 1,
                name: "climb up large ladder",
            },
        ];
    }
}

export interface ISubSkill {
    id: number;
    name: string;
}
