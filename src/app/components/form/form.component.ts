import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  public isLoading: boolean = false;
  public succes: boolean = false;

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
    if(this.emailControl.invalid || this.nameControl.invalid || this.userControl.invalid){
      this.emailControl.markAsTouched();
      this.nameControl.markAsTouched();
      this.userControl.markAllAsTouched();
      return
    }
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
      this.succes = true
    }, 2000);

  }

}
