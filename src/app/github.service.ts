import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SearchComponent } from './search/search.component';


@Injectable({
  providedIn: 'root'
})
export class GithubService {
 x = SearchComponent;
 
  username: any;

  constructor(private http: HttpClient) { }

  getGithubUser(username: any){
    return this.http.get(`${environment.apiUrl+username}?access_token=' + ${environment.apiKey}'`,{
      headers: headers
    })
  }
}



const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/vnd.github.v3.raw',
  Authorization: 'token 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',
};