import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { ArtistService } from '../../../services/artist.service';

import { Artist } from '../../../shared/artist';
import { ARTISTS } from '../../../../data/mockArtists';
import { SearchAPI } from '../../../shared/search/formsearch';


@Component({
  selector: 'app-artistindex',
  templateUrl: './artistindex.component.html',
  styleUrls: ['./artistindex.component.css']
})

export class ArtistindexComponent implements OnInit {
  matchedArtists$: Observable<Artist[]>;

  private searchTerms = new Subject<string>();
  private searchForm: SearchAPI;
  private submittable: boolean;
  artists = ARTISTS;

  constructor(private artistService: ArtistService) {
    this.searchForm = new SearchAPI();
  }


  // Push a search term into the observable stream.
  search(term: string): void {

    this.submittable = this.searchForm.isSubmitable(term);

    if (this.submittable) {

      let searchterm = this.searchForm.cleansedSearch(term);

      this.searchTerms.next(searchterm);
    }
  }
  
  setupSearch(): void {

    this.matchedArtists$ = this.searchTerms.pipe(
      // wait 700ms after each keystroke before considering the term
      debounceTime(1000),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) =>
        this.artistService.retrieveArtistByName(term)
      ),
    );
  }

  ngOnInit() {
    this.setupSearch();
  }

}
