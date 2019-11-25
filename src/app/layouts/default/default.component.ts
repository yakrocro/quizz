import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  @Output()
  // openSideBar_a = new EventEmitter<boolean>();
  _hideSideBar = false ;

  constructor() { }

  ngOnInit() { }

  setHideSideBar(open : boolean) {
    // (open) ? console.log("Yes open it") : console.log("No close it");
    this._hideSideBar = open ;
    // this.openSideBar_a.emit(open) ;

  }

  getHideSideBar(){
    return this._hideSideBar;
  }





}
