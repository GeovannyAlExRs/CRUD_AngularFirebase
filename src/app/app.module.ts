import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// *** MODULES ***
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

// *** COMPONENTS ***
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EmploymentListComponent } from './components/employment-list/employment-list.component';
import { EmploymentCreateComponent } from './components/employment-create/employment-create.component';
import { EmploymentHomeComponent } from './components/employment-home/employment-home.component';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EmploymentListComponent,
    EmploymentCreateComponent,
    EmploymentHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
