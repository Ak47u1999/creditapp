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


//   {
//     "input_data": [
//         {
//             "fields": [
//                 [
//                     "code_gender",
//                     "flag_own_car",
//                     "flag_own_realty",
//                     "cnt_children",
//                     "amt_income_total",
//                     "name_income_type",
//                     "name_education_type",
//                     "name_family_status",
//                     "name_housing_type",
//                     "age_years",
//                     "years_employed",
//                     "cnt_fam_members"
//                 ]
//             ],
//             "values": [
//                 [
//                     1,
//                     1,
//                     1,
//                     0,
//                     427500,
//                     4,
//                     1,
//                     0,
//                     4,
//                     33,
//                     12,
//                     2
//                 ]
//             ]
//         }
//     ]
// }
}
