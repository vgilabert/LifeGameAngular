import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CellComponent } from './cell/cell.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    CellComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule { }
