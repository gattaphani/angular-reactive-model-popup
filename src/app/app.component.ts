import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   myform: FormGroup;
  // msg:any;

 
  item:any;

  isEditable:boolean = false;

  public userdata: any = [];

  countries: any = [] = [
    {id:1,name: 'INDIA'},
    {id:2,name: 'USA'},
    {id:3,name: 'GERMANY'},
    {id:4,name: 'CANADA'},
    {id:5,name: 'BRAZIL'},
  ];
  countryselected: any;

  onChange(countryname)
   {
    this.countryselected = countryname;
    console.log("Selected Country :",this.countryselected);
   }
  users: any[] = [];

  get f() {
    return this.myform.controls;
  }
  constructor() {
    this.myform = new FormGroup({

      firstname : new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(25), Validators.pattern('^[a-zA-Z]*$')]),

      lastname : new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(25), Validators.pattern('^[a-zA-Z]*$')]),

      email : new FormControl('', [Validators.required, Validators.minLength(2),
      Validators.maxLength(25), Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),

      amount : new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(7), Validators.pattern('^[0-9]*$')]),

      gender : new FormControl('', [Validators.required]),

      dob : new FormControl('', [Validators.required]),

      country : new FormControl('', [Validators.required])

    });
  }

  ngOnInit() {
  }
  
  onSubmit() {
  
    if (this.myform.valid) {
      console.log(this.myform.value);
      
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.myform.value));
  }

  saveData(item) {
    
    this.users.push(item);
    console.log('save data:',item);
    this.myform.reset();
  }

  update(item) {

    this.myform.patchValue({
      'firstname': item.firstname,
      'lastname': item.lastname,
      'email': item.email,
      'amount': item.amount,
      'gender': item.gender,
      'dob': item.dob,
      'country': item.country,

   });
   
   console.log('update data:',item);
  }

  delete(index)
  {
    this.users.splice(index,1);
  }
}
