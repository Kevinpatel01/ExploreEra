import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BookingService } from '../book/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit {
  paymentForm: FormGroup;
  activeTab: string = 'card';
  bookingData: any = {};

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private bookingService: BookingService
  ) {
    this.paymentForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]],
      expiryDate: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
      cvv: ['', [Validators.required, Validators.pattern(/^\d{3}$/)]],
      zipCode: ['', Validators.required],
      bankSelect: [''],
      upiId: ['']
    });
  }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const path = this.route.snapshot.firstChild?.url[0]?.path;
      if (path) {
        this.activeTab = path;
        this.updateFormValidators();
      }
    });
  }

  onTabChange(tab: string) {
    this.activeTab = tab;
    this.router.navigate(['pay', tab]);
    this.updateFormValidators();
  }

  updateFormValidators() {
    if (this.activeTab === 'card') {
      this.paymentForm.get('cardName')?.setValidators([Validators.required]);
      this.paymentForm.get('cardNumber')?.setValidators([Validators.required, Validators.pattern(/^\d{16}$/)]);
      this.paymentForm.get('expiryDate')?.setValidators([Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]);
      this.paymentForm.get('cvv')?.setValidators([Validators.required, Validators.pattern(/^\d{3}$/)]);
      this.paymentForm.get('zipCode')?.setValidators([Validators.required]);
      this.paymentForm.get('bankSelect')?.clearValidators();
      this.paymentForm.get('upiId')?.clearValidators();
    }
    else if (this.activeTab === 'netbanking') {
      this.paymentForm.get('cardName')?.clearValidators();
      this.paymentForm.get('cardNumber')?.clearValidators();
      this.paymentForm.get('expiryDate')?.clearValidators();
      this.paymentForm.get('cvv')?.clearValidators();
      this.paymentForm.get('zipCode')?.clearValidators();
      this.paymentForm.get('bankSelect')?.setValidators([Validators.required]);
      this.paymentForm.get('upiId')?.clearValidators();
    }
    else if (this.activeTab === 'upi') {
      this.paymentForm.get('cardName')?.clearValidators();
      this.paymentForm.get('cardNumber')?.clearValidators();
      this.paymentForm.get('expiryDate')?.clearValidators();
      this.paymentForm.get('cvv')?.clearValidators();
      this.paymentForm.get('zipCode')?.clearValidators();
      this.paymentForm.get('bankSelect')?.clearValidators();
      this.paymentForm.get('upiId')?.setValidators([Validators.required]);
    }

    this.paymentForm.get('cardName')?.updateValueAndValidity();
    this.paymentForm.get('cardNumber')?.updateValueAndValidity();
    this.paymentForm.get('expiryDate')?.updateValueAndValidity();
    this.paymentForm.get('cvv')?.updateValueAndValidity();
    this.paymentForm.get('zipCode')?.updateValueAndValidity();
    this.paymentForm.get('bankSelect')?.updateValueAndValidity();
    this.paymentForm.get('upiId')?.updateValueAndValidity();
  }

  onSubmit() {
    if (this.paymentForm.valid) {
      if (this.activeTab === 'card') {
        // console.log("Card Payment Details: ", this.paymentForm.value);
      }
      else if (this.activeTab === 'netbanking') {
        // console.log("Netbanking Details: ", this.paymentForm.get('bankSelect')?.value);
      }
      else if (this.activeTab === 'upi') {
        // console.log("Upi Details: ", this.paymentForm.get('upiId')?.value);
      }
      this.toast.success("Success");
      this.router.navigate(["/confirm"]);
      this.paymentForm.reset();
    } else {
      this.toast.error("Please fill all fields correct!");
      console.log('Form is invalid');
    }
  }
}
