import { Component, OnInit } from '@angular/core';
import { formModel } from 'src/Models/formModel';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css']
})
export class ApplicationFormComponent implements OnInit {

  
  formData?:formModel;
  constructor() { }

  ngOnInit(): void {
  }

}
