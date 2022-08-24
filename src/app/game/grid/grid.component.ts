import {Component, OnInit} from '@angular/core';
import {Cell} from "../../../classes/Cell";

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  public size: number = 35;
  grid: Cell[][] = [];

  constructor() {
    for (let i = 0; i < this.size; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.size; j++) {
        row.push(new Cell());
      }
      this.grid.push(row)
    }
  }

  ngOnInit(): void {
  }

  displayCell() {
    for (let i = 0; i < this.size; i++) {
      const row: Cell[] = [];
      for (let j = 0; j < this.size; j++) {
        console.log(this.grid[i][j].status);
      }
      this.grid.push(row)
    }
  }

  update() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        const currentCell: Cell = this.grid[i][j];
        const neighbors: number = this.getLivingNeighbors(i, j);
        if (neighbors === 3 && currentCell.isDead()) {
          currentCell.switch = true;
        } else if ((neighbors < 2 || neighbors > 3) && currentCell.isAlive()) {
          currentCell.switch = true;
        }
      }
    }
  }

  getLivingNeighbors(x: number, y: number): number {
    let neighbors: number = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) {
          continue;
        }
        const xPos: number = x + i;
        const yPos: number = y + j;
        if (xPos >= 0 && xPos < this.grid.length && yPos >= 0 && yPos < this.grid[xPos].length) {
          neighbors += this.grid[xPos][yPos].status;
        }
      }
    }
    return neighbors;
  }

  switchCells() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        const currentCell: Cell = this.grid[i][j];
        if (currentCell.switch) {
          currentCell.isDead() ? currentCell.born() : currentCell.die();
          currentCell.switch = false;
        }
      }
    }
  }

  reset() {
    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[i].length; j++) {
        const currentCell: Cell = this.grid[i][j];
        currentCell.die();
      }
    }
  }
}
