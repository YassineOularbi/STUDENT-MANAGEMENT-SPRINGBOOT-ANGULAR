import { Component } from '@angular/core';
import { faNewspaper } from '@fortawesome/free-regular-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent{
  faNewspaper = faNewspaper;
  faInbox = faInbox;
  faListCheck = faListCheck;
  faMoon = faMoon
  faBell = faBell;
  faMagnifyingGlass = faMagnifyingGlass;
  searchText:any;
  students:Object;
  constructor(private router: Router){}

  onSearchChange(): void {
    if(this.searchText){
      this.router.navigateByUrl("students/search/"+this.searchText)
    } else {
      this.router.navigateByUrl("")
    }
  }
}
