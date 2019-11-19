import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navbarOpen: boolean = false ;

  constructor() { }

  ngOnInit() { }

  toggleNavBar() {
    this.navbarOpen = !this.navbarOpen ;
  }

}
