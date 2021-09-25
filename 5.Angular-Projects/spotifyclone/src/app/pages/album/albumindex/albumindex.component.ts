import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { AlbumService } from '../../../services/album.service';
import { Album } from '../../../shared/album';
import { SearchAPI } from '../../../shared/search/formsearch';
import { ALBUMS } from '../../../../data/mockAlbums';


@Component({
  selector: 'app-albumindex',
  templateUrl: './albumindex.component.html',
  styleUrls: ['./albumindex.component.css']
})

export class AlbumindexComponent implements OnInit {
  private matchedAlbums$: Observable<Album[]>;

  private searchTerms = new Subject<string>();
  private searchForm: SearchAPI;
  private submittable: boolean;

  private albums = ALBUMS;

  constructor(private albumService: AlbumService) { 
    this.searchForm = new SearchAPI();
  }

  // Push a search term into the observable stream.
  search(term: string): void {

    this.submittable = this.searchForm.isSubmitable(term);

    if(this.submittable){

      let searchterm = this.searchForm.cleansedSearch(term);

      this.searchTerms.next(searchterm);
    }
    
  }
  setupSearch(): void {

    this.matchedAlbums$ = this.searchTerms.pipe(
      // wait 700ms after each keystroke before considering the term
      debounceTime(1000),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.albumService.retrieveAlbumbyName(term)
      ),
    );
  }

  ngOnInit() {
    this.setupSearch();
  }
}