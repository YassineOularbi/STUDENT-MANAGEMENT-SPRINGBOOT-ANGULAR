import { NgModule, isStandalone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { StudentsComponent } from './students/students.component';
import { provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
