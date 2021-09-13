import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

    countries = [
    {
      country: 'India',
      state: 'Punjab'
    },
    {
      country: 'USA',
      state: 'New York'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit( frmObj: any ) {

    console.log('frmObj', frmObj);

    if( !frmObj.submitted ) {
      console.log('not submitted');
      return;
    }

    // if( frmObj.invalid ) {
    //   console.log('in_data.errors', frmObj.errors);  
    //   return;
    // }

    let in_data = frmObj.value;
    console.log('in_data', in_data);
  }

}
