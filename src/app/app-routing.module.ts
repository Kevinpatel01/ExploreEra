import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { LocationDetailComponent } from './Components/location-detail/location-detail.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { PlanComponent } from './Pages/plan/plan.component';
import { BookComponent } from './Pages/book/book.component';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { CategoryDetailComponent } from './Components/category-detail/category-detail.component';
import { SearchComponent } from './Components/search/search.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { AuthguardService } from './authguard.service';
import { PaymentComponent } from './Pages/payment/payment.component';
import { ConfirmComponent } from './Pages/confirm/confirm.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { FAQsComponent } from './Pages/faqs/faqs.component';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "location-detail/:locationid",
    component: LocationDetailComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "category/:category",
    component: CategoryDetailComponent,
    canActivate: [AuthguardService]
  },

  {
    path: "plan",
    component: PlanComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "book",
    component: BookComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "booking",
    component: BookingsComponent
  },
  {
    path: "pay",
    component: PaymentComponent,
    canActivate: [AuthguardService],
    children: [
      { path: '', redirectTo: 'card', pathMatch: 'full' },
      { path: 'card', component: PaymentComponent },
      { path: 'netbanking', component: PaymentComponent },
      { path: 'upi', component: PaymentComponent }
    ]
  },
  {
    path: "confirm",
    component: ConfirmComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "blog",
    component: BlogComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "contact",
    component: ContactusComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "search",
    component: SearchComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthguardService]
  },
  {
    path: "faqs",
    component: FAQsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
