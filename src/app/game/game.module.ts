import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CellComponent } from './cell/cell.component';
import { GridComponent } from './grid/grid.component';
import { GameComponent } from './game/game.component';

import { MatGridListModule } from '@angular/material/grid-list';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    CellComponent,
    GridComponent,
    GameComponent,
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MatGridListModule,
    MatButtonModule
  ]
})
export class GameModule { }
