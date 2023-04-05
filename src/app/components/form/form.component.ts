import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  nameControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(4)
    ]
  )
  
  emailControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.email
    ]
  )

  userControl = new FormControl(
    '',
    [
      Validators.required,
      Validators.minLength(6)
    ]
  )

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {

    this.registerForm = this.formBuilder.group({
      nombre: this.nameControl,
      usuario: this.userControl,
      email: this.emailControl
    })

    console.log(this.emailControl.value);

  }

  onSubmit(){
    console.log(this.userControl.errors);
    
  }

}
