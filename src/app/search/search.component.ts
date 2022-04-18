import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  username!: any;

  constructor(private githubService: GithubService) { 
    this.githubService = githubService;
  }

  ngOnInit(): void { }

  getUser(){
    this.githubService.getGithubUser(this.username)
    console.log(this.username);
    
  }

}
