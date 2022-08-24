import {Component, Input, OnInit} from '@angular/core';
import {Cell} from "../../../classes/Cell";

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell!: Cell;

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.cell.status)
  }

  getCellClass() {
    if (this.cell.isAlive()) {
      return 'alive';
    } else {
      return 'dead';
    }
  }

  onMouseEnter(e: MouseEvent) {
    if(e.buttons === 1)
      this.cell.status = this.cell.status === 1 ? 0 : 1;
  }

  onMouseDown() {
    this.cell.status = this.cell.status === 1 ? 0 : 1;
  }
}
