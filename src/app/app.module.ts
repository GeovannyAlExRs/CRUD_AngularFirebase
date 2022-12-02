import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { EmploymentListComponent } from './components/employment-list/employment-list.component';
import { EmploymentCreateComponent } from './components/employment-create/employment-create.component';
import { EmploymentHomeComponent } from './components/employment-home/employment-home.component';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
