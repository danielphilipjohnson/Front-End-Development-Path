export class SearchAPI {
    private SearchTermWhitespaceTrimmed: string;
    
    isSubmitable(term: string): boolean {
        // Remove white space and beginning and end
        this.SearchTermWhitespaceTrimmed = term.replace(/^\s+/, '').replace(/\s+$/, '');

        // If search box is empty dont send a request
        if (this.SearchTermWhitespaceTrimmed === '') {
            return false;
        }

        // if search input contains letters allow it to go to a get request
        else {
            return true;
        }
    }
    cleansedSearch(term: string): any {
        // Remove white space and beginning and end
        this.SearchTermWhitespaceTrimmed = term.replace(/^\s+/, '').replace(/\s+$/, '');
 
        return this.SearchTermWhitespaceTrimmed;
    }
}