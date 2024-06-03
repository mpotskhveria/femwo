import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{

  myForm!: FormGroup;

  ngOnInit(){
    this.myForm = new FormGroup({
      firstname: new FormControl(null, Validators.required),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(3)]),
      age: new FormControl(18)
    })
  }

  test(){
    console.log(this.myForm)
  }

}
