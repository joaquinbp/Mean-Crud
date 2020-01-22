export class Teacher {

    _id : String;
    name: String;
    surname: String;
    area: String;
    salary: Number;

    constructor(_id='', name='', surname='', area='', salary=0){
        this._id = _id;
        this.name = name;
        this.surname = surname;
        this.area = area;
        this.salary = salary;
    }

}
