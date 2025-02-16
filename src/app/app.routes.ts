import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { AdminComponent } from './admin/admin.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'content', component: ContentComponent },
      { path: 'navbar', component: NavbarComponent },
      { path: 'footer', component: FooterComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'product/:id', component: ProductComponent },
      { path: '**', redirectTo: '' },
];
