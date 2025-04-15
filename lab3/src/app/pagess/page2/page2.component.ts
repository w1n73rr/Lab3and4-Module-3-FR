import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page2',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  users: any[] = []; 

  myForm: FormGroup;

  constructor() {
    this.myForm = new FormGroup({
      "userName": new FormControl('', Validators.required),
      "userSurname": new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      this.users.push(this.myForm.value);
      this.myForm.reset();
    }
  }
}