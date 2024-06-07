import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] 
})

export class RegisterComponent {
  username: string | undefined;
  email: string | undefined;
  password: string | undefined;
  message: string | undefined;

  constructor(private auth: AuthService, private route: Router, private toastr: ToastrService) { }

  onSubmit() {
    if (!this.username || !this.email || !this.password) {
      this.toastr.warning("All fields are required!");
      return;
    }
    this.auth.register(this.username, this.email, this.password).subscribe(
      (data: any) => {
        // console.log(data);
        this.auth.saveToken(data.token);
        this.toastr.success("Successfully registered");
        this.route.navigate(["/"]);
      },
      (error: any) => {
        // console.log(error);
        this.toastr.error("Something went wrong!!");
      }
    );
  }
}

