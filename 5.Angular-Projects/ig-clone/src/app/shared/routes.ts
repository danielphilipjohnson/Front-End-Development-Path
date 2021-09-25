import { IndexComponent } from '../index/index.component';
import { UserComponent } from '../pages/user/user.component';
import { UsersPhotoComponent } from '../pages/users-photo/users-photo.component';
import { ExploreComponent } from '../pages/explore/explore.component';
import { PageNotFoundComponent } from'../pages/page-not-found/page-not-found.component';
import {  Routes } from '@angular/router';


export const appRoutes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'user/:id',      component: UserComponent },
    { path: 'user/photo/:id',      component: UsersPhotoComponent },
    { path: 'explore',      component: ExploreComponent },
    { path: '**', component: PageNotFoundComponent }
  ];