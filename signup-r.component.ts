import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-r',
  templateUrl: './signup-r.component.html',
  styleUrls: ['./signup-r.component.css']
})
export class SignupRComponent implements OnInit {

  departments:string[] = ["Information Technology",
"Human Resource",
"Research and Development",
"IT Operations"]
  constructor() { }

  ngOnInit(): void {
  }

}
