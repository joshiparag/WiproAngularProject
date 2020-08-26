import { Component, OnInit } from '@angular/core';
import{Employee} from '../employee'

@Component({
  selector: 'app-signup-td',
  templateUrl: './signup-td.component.html',
  styleUrls: ['./signup-td.component.css']
})
export class SignupTDComponent implements OnInit {

departments:string[] = ["Information Technology",
"Human Resource",
"Research and Development",
"IT Operations"]

signup(form)
{
  alert("form submitted successfully")
  console.log("Employee Name", form.value.empname);
  console.log("Employee Password", form.value.emppassword);
}

 employee : Employee;

  constructor() { }

  ngOnInit() {
    this.employee = new Employee({empname:"",
 password:{emppassword:"",emprpassword:""},empemail:""
,empdepartment:this.departments[0],empsign:false});
//console.log(this.employee)
  }

}
