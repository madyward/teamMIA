import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  msg = '';
  nCnt: number = 0;
  clickMe(){
      this.nCnt = this.nCnt + 1;
      this.msg = "Clicked: " + this.nCnt;

      if(this.nCnt === 3){
       alert('3')
      }
     
    }
  constructor() { }
  ngOnInit() {
  }
}
