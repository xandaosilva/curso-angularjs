import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder){}

  ngOnInit(): void {
    console.log(this.form.value.email);
    console.log(this.form.value.password);
  }
}
