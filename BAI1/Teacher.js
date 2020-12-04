export default class Teacher {
    id;
    name;
    age;
    ability; //master,doctor,bachelor
    constructor(id,name,age,ability){
        this.id=id;
        this.name = name;
        this.age = age;
        this.ability = ability;
    }
}