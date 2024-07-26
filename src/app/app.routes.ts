import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'contact',
        component: ContactComponent,
    },
    {
        path: 'about',
        component: AboutComponent,
    },
    {
        path: 'sign-up',
        component: SignUpComponent,
    },
    {
        path: 'wishlist',
        component: WishListComponent,
    },
    {
        path: '404',
        component: NotfoundComponent,
    },
    {
        path: '**',
        redirectTo: '404',
    }
];
