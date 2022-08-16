import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageDetailComponent } from 'src/components/blog-page-detail/blog-page-detail.component';
import { BlogPageComponent } from 'src/components/blog-page/blog-page.component';
import { ContactComponent } from 'src/components/contact/contact.component';
import { LoginComponent } from 'src/components/login/login.component';
import { APP_BASE_HREF } from '@angular/common';
import { EmptyRouteComponent } from './empty-route/empty-route.component';

const routes: Routes = [
  { path: '', redirectTo: '/blog', pathMatch: 'full' },
  { path: 'blog', component: BlogPageComponent },
  { path: 'blog-detail', component: BlogPageDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/angular' }],
})
export class AppRoutingModule {}
