import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit {
  myForm: FormGroup | any;
  ngOnInit(): void {

    this.myForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phonenumber: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required),
    })
  }

  onSubmit() {
    this.myForm.value;
    // console.log(this.myForm.value);
    this.myForm.reset();
  }
}
