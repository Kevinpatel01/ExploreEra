import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ProfileService } from './profile.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  user: User | undefined;
  editForm: FormGroup;
  isEditing: boolean = false;
  constructor(
    private profile: ProfileService,
    private fb: FormBuilder,
    private toast: ToastrService,
    private router: Router
  ) {
    this.editForm = this.fb.group({
      username: [''],
      email: ['']
    });
  }
  ngOnInit(): void {
    this.profile.getUserProfile().subscribe(
      data => {
        this.user = data;
        this.editForm.setValue({ username: data.username, email: data.email });
      },
      (err: any) => console.error(err)
    );
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  Mybooking(){
    this.router.navigate(["/booking"]);
  }

  onSubmit() {
    const { username, email } = this.editForm.value;
    this.profile.updateProfile(username, email).subscribe(
      data => {
        this.user = data;
        this.isEditing = false;
      },
      (error: any) => console.error(error)
    );
    this.toast.info("E-mail updated!");
  }
}
