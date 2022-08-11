export class Cell {
  status: number = 0;
  switch: boolean = false;

  constructor() { }

  public isAlive(): boolean {
    return this.status === 1;
  }

  public isDead(): boolean {
    return this.status === 0;
  }

  public born() {
    this.status = 1;
  }

  public die() {
    this.status = 0;
  }
}
