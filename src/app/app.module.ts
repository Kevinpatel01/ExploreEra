import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CarouselComponent } from './Components/carousel/carousel.component';
import { LocationsComponent } from './Components/locations/locations.component';
import { ServicesService } from './services.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './Components/about/about.component';
import { BlogComponent } from './Components/blog/blog.component';
import { RouterModule } from '@angular/router';
import { LocationDetailComponent } from './Components/location-detail/location-detail.component';
import { LoginComponent } from './Pages/login/login.component';
import { RegisterComponent } from './Pages/register/register.component';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { PlanComponent } from './Pages/plan/plan.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { BookComponent } from './Pages/book/book.component';
import { CdkTableModule } from '@angular/cdk/table';
import { ContactusComponent } from './Components/contactus/contactus.component';
import { CategoryDetailComponent } from './Components/category-detail/category-detail.component';
import { SearchComponent } from './Components/search/search.component';
import { AuthService } from '@auth0/auth0-angular';
import { ProfileComponent } from './Components/profile/profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaymentComponent } from './Pages/payment/payment.component';
import { ConfirmComponent } from './Pages/confirm/confirm.component';
import { BookingsComponent } from './Components/bookings/bookings.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FAQsComponent } from './Pages/faqs/faqs.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CarouselComponent,
    LocationsComponent,
    AboutComponent,
    BlogComponent,
    LocationDetailComponent,
    LoginComponent,
    RegisterComponent,
    PlanComponent,
    BookComponent,
    ContactusComponent,
    CategoryDetailComponent,
    SearchComponent,
    ProfileComponent,
    PaymentComponent,
    ConfirmComponent,
    BookingsComponent,
    FooterComponent,
    FAQsComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatDatepickerModule,
    CdkTableModule,
    ToastrModule.forRoot({timeOut: 4000}),
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration(),
    ServicesService,
    AuthService,
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
