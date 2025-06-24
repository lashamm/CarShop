import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { ErrorComponent } from './error/error.component';
import { ProductComponent } from './product/product.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path: '', redirectTo: "home", pathMatch : "full"},
    {path: 'home', component : HomeComponent},
    {path: 'products', component : ProductComponent},
    {path: 'contact', component : ContactComponent },
    {path: 'about', component :  AboutComponent},
    {path: '**', component : ErrorComponent},
];
