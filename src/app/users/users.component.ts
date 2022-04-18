import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  username!: string;

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    this.githubService.getGithubUser(this.username).subscribe((response: any) => {
      console.log('Data', response);
      // console.log(this.username);
      
    })
  }
  

}


