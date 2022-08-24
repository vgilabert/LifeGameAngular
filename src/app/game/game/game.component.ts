import {Component, OnInit, ViewChild} from '@angular/core';
import {interval} from "rxjs";
import {GridComponent} from "../grid/grid.component";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  public sub: any;

  @ViewChild(GridComponent) gridComponent!: GridComponent;

  constructor() {
  }

  ngOnInit(): void {

  }

  myFunc() {
    this.gridComponent.update();
    this.gridComponent.switchCells();
  }

  start() {
    this.sub = interval(200)
      .subscribe(() => { this.myFunc(); });
  }

  stop() {
    this.sub.unsubscribe();
  }

  reset() {
    this.gridComponent.reset();
  }
}
