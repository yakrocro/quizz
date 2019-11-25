import { Component, Input, OnInit, OnChanges, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() hideSideBar: boolean = true;
  // @Input() secondInput: boolean = false;

  constructor() { }

  ngOnInit() { }

  toggleSideBar() {
    console.log("hideSideBar = " + this.hideSideBar ) ;
  }

  ngOnChanges(changes : {[inputs: string] : SimpleChange}) {
   // let _changes = JSON.stringify(changes);
   // console.log("changes : " + _changes);
   // console.log(changes[propName]);

   for(let input in changes){
     // console.log("input = " + input);
     // console.log(typeof(input));

     if(input === "hideSideBar") {
       let inputHideSideBar = changes[input];
       console.log("show hideSideBar = " + inputHideSideBar.currentValue );
     }

     // let input = changes[propName];
     // console.log("changesProp = " + JSON.stringify(changesProp));

     // let val = JSON.stringify(changesProp.currentValue);
     // console.log("val = " + val );
   }



  }

}
