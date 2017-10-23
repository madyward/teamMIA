import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-leader-boards',
  templateUrl: './leader-boards.component.html',
  styleUrls: ['./leader-boards.component.css']
})
export class LeaderBoardsComponent implements OnInit {

  nCnt: number = 0;
  clickMe(){
      this.nCnt = this.nCnt + 1;
      

      if(this.nCnt === 3){
       alert('3')
      }
     
    }

  constructor() { }
  ngOnInit() {
  }
}
