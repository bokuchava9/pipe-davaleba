import { CommonModule, CurrencyPipe, DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule, CommonModule,ReactiveFormsModule, UpperCasePipe,CurrencyPipe,DatePipe],
  templateUrl: './forms.html',
  styleUrl: './forms.css'
})
export class Forms {


  nameControl= new FormControl("");


  showValue(){
    alert(this.nameControl.value)
  }


  form=   new FormGroup(
    {
      name: new FormControl(""),
      email: new FormControl("")
    }
  )

  submitForm(){
    console.log(this.form.value)
  }

  formGroup = new FormGroup({
    name: new FormControl(""),
    birthDate: new FormControl(""),
    fee: new FormControl("")
  });



  get studentData(){
    return this.formGroup.value;
  }
}
