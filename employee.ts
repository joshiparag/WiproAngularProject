export class Employee{
    empname:string;
    password:{
        emppassword:string;
        emprpassword:string;
    };
    empemail:string;
    empdepartment:string;
    empsign:boolean;

    constructor(values:Object={})
    {
        Object.assign(this,values);
    }
}