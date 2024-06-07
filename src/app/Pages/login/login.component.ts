import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string | undefined;
  password: string | undefined;

  constructor(private authservice: AuthService, private route: Router, private toastr: ToastrService) { }

  onSubmit() {
    if (!this.email || !this.password) {
      this.toastr.warning("Please fill up all fields");
      return;
    }
    this.authservice.login(this.email, this.password).subscribe(
      (data: any) => {
        // console.log(data);
        this.authservice.saveToken(data.token);
        this.toastr.success("Login Successful");
        this.route.navigate(["/home"]);
      },
      (error: any) => {
        console.log(error);
        this.toastr.error("Invalid credentials!!");
      }
    );
  }
}
