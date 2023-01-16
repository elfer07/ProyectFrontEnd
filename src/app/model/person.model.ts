export class person {
    id?: number;
    name: string;
    surname: string;
    description: string;
    img: string;

    constructor(name: string, surname: string, description: string, img: string) {
        this.name = name;
        this.surname = surname;
        this.description = description;
        this.img = img;
    }
}