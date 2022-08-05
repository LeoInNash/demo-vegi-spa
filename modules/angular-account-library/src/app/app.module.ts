import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BlogPageDetailComponent } from 'src/components/blog-page-detail/blog-page-detail.component';
import { BlogPageComponent } from 'src/components/blog-page/blog-page.component';
import { FilterPipe } from 'src/components/blog-page/filter.pipe';
import { ContactComponent } from 'src/components/contact/contact.component';
import { LoginComponent } from 'src/components/login/login.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    BlogPageDetailComponent,
    ContactComponent,
    LoginComponent,
    FilterPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
