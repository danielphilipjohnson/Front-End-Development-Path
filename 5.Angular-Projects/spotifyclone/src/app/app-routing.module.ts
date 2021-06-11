import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { IndexComponent  } from './pages/index/index.component';
//import { IndexComponent } from './components/index/index.component';

import { AlbumindexComponent  } from './pages/album/albumindex/albumindex.component';
import { TracksComponent } from './pages/album/tracks/tracks.component';

import { IdComponent } from './pages/artist/id/id.component';
import { AlbumsComponent } from './pages/artist/albums/albums.component';
import { VideosComponent } from './pages/artist/videos/videos.component';
import { ArtistindexComponent } from './pages/artist/artistindex/artistindex.component';


const routes: Routes = [
  // working home page might need more links
  { path: '', component: IndexComponent },
  { path: 'albums', component: AlbumindexComponent },
  { path: 'albums/:id/tracks', component: TracksComponent },


  
  // ARTIST  
  // Search Artist by name
  { path: 'artist', component: ArtistindexComponent },
  { path: 'artist/:id', component: IdComponent },
  { path: 'artist/:id/albums', component: AlbumsComponent },
  { path: 'artist/:id/videos', component: VideosComponent },
  // search artist for name
  //{ path: 'artist/name/:name', component: ArtistComponent },

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
