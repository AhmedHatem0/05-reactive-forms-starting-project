import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports:[ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('',{
      validators: [Validators.required, Validators.email],
    }),
    password: new FormControl('',{
      validators: [Validators.required, Validators.minLength(6),hasQuestionMark],
    })
  });

  onSubmit() {
    console.log(this.form.value);
  }
}

  function hasQuestionMark(control:AbstractControl) {
    if(!control.value.includes('?')){
      return { doesntHaveQuestionMark: true };
    }
    return null;
  }