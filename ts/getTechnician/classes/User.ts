export class User {
    id: number;
    name: string;
    
    constructor(props: IProps) {
        this.id = props.id;
        this.name = props.name;
    }
}

export interface IProps {
    id: number;
    name: string;
}
