import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import {SideNavbarComponent} from './Components/side-navbar/side-navbar.component'
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { MainComponent } from './Components/main/main.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule,MatButtonModule, MatFormFieldModule, MatInputModule,MatIconModule,
  MatSidenavModule,MatToolbarModule,  MatListModule, MatTableModule, MatTabsModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './/app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SideNavbarComponent,
    DashboardComponent,
    MainComponent
  ],
  imports: [
    MatInputModule,
    MatButtonModule,
    BrowserModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule,
    MatFormFieldModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,  MatListModule,
    NgxDatatableModule,
    MatTableModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
