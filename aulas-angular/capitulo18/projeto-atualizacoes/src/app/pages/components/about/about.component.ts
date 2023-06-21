import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { getRouteParams } from 'src/app/helpers/get-route-params';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public form = this.formBuilder.group(
    {
      email: ['admin@gmail.com'],
      password: ['1234567890']
    }
  );

  public id = getRouteParams('id');

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
    console.log(this.id);
  }
}
