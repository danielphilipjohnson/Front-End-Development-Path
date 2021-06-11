import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
      
import { RouterModule, Routes } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
 
import { AppComponent } from './app.component';
import { NavComponent } from './partials/nav/nav.component';
import { CommentmodalComponent } from './partials/commentmodal/commentmodal.component';
import { IndexComponent } from './index/index.component';
import { PhotosComponent } from './partials/photos/photos.component';

import { UserComponent } from './pages/user/user.component';
import { ExploreComponent } from './pages/explore/explore.component';
import { PageNotFoundComponent } from'./pages/page-not-found/page-not-found.component';

import { FetchPhotoPostsService } from './services/fetch-photo-posts.service';

import { appRoutes } from './shared/routes';
import { PhotoComponent } from './partials/photo/photo.component';
import { UsersPhotoComponent } from './pages/users-photo/users-photo.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { NotificationbarComponent } from './partials/notificationbar/notificationbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommentmodalComponent,
    IndexComponent,
    PhotosComponent,
    UserComponent,
    ExploreComponent,
    PageNotFoundComponent,
    PhotoComponent,
    UsersPhotoComponent,
    NotificationsComponent,
    NotificationbarComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    FetchPhotoPostsService
  ],
  bootstrap: [

    AppComponent]
})
export class AppModule { }
