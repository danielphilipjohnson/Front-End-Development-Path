import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';

import { AppComponent } from './app.component';
/* Page Components */
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchComponent } from './components/search/search.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselComponent } from './components/carousel/carousel.component';

/* PAGES */
import { IndexComponent  } from './pages/index/index.component';

import { ArtistindexComponent } from './pages/artist/artistindex/artistindex.component';
import { IdComponent } from './pages/artist/id/id.component';
import { AlbumsComponent } from './pages/artist/albums/albums.component';
import { VideosComponent } from './pages/artist/videos/videos.component';

import { TracksComponent } from './pages/album/tracks/tracks.component';
import { AlbumindexComponent } from './pages/album/albumindex/albumindex.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IndexComponent,
    SearchComponent,
    FooterComponent,
    CarouselComponent,
    TracksComponent,
    IdComponent,
    AlbumsComponent,
    AlbumindexComponent,
    ArtistindexComponent,
    VideosComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
