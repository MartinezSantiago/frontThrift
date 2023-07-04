import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css'],
})
export class FeedComponent {
  constructor(public router: Router, private http: HttpClient) {}
  @Input() products: any;
  @Input() isUserProfile:any;
  @Input() vendor:any;
  ngOnInit() {

    console.log(this.location);
  }

  location: any = window.location.pathname;

  userName: any;

  navigateToUserProfile(id: string) {
    this.router.navigate(['store', id]);
  }

  
}
