import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { emailMatcher } from '../../Validators/emailMatcher.validator';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent implements OnInit {
  myForm!: FormGroup;
  loggedinEmail: string | null;

  constructor(
    private toast: ToastrService,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) { this.loggedinEmail = this.authService.getLoggedInUserEmail(); }
  
  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, emailMatcher(this.loggedinEmail)]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^(\+\d{1,3}[- ]?)?\d{10}$/)]],
      message: ['', Validators.required],
    })
  }

  onSubmit() {
    this.myForm.value;
    this.toast.success("Thank you for getting in touch!");
    // console.log(this.myForm.value);
    this.myForm.reset();
  }
}
