import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navBarOpen: boolean = false ;

  @Output()
  isHidden = new EventEmitter<boolean>(); //

  constructor() { }

  ngOnInit() { }

  toggleNavBar() {
    this.navBarOpen = !this.navBarOpen ;
    // this.isHidden.emit(this.navBarOpen);
    console.log("this.navBarOpen => " + this.navBarOpen)
  }

  closeNavBar() {
    this.navBarOpen = false ;
  }



}
