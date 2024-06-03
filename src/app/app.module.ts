import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { BackgroundColor } from './directives/painter.directive';
import { Fonter } from './directives/fonter.directive';
import { ListenerDirective } from './directives/listener.directive';
import { BindDirective } from './directives/bind.directive';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { RoutingModule } from './Routing.module';
import { PercentagePipe } from './custompipes/rating.pipe';
import { LoginComponent } from './login/login.component';
import { LoginService } from './services/login.service';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    CatalogComponent,
    BackgroundColor,
    Fonter,
    ListenerDirective,
    BindDirective,
    ListComponent,
    NavbarComponent,
    ItemComponent,
    PercentagePipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
