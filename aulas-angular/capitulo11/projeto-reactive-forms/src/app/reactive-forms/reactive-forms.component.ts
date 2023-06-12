import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.scss']
})
export class ReactiveFormsComponent implements OnInit {

  public saveForm: FormGroup = this.formBuilder.group({
    firstName: ["", Validators.required],
    lastName: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(20)]],
    email: ["", [Validators.required, Validators.email]]
  });

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
  }

  public submitForm(){
    if(this.saveForm.valid){
      console.log(this.saveForm);
      console.log(this.saveForm.value);
      console.log(this.saveForm.value.firstName);
      console.log(this.saveForm.value.lastName);
      console.log(this.saveForm.value.email)
    }
  }
}
