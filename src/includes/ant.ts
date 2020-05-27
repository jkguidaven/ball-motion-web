function getRandomInt(max: number) {
  return Math.floor(Math.random() * Math.floor(max));
}

export class Ant {
  constructor(
    public x: number,
    public y: number) { }
}

export class AntQueen {
  private _deaths: number = -1;
  private _child: Ant;

  constructor() {
    this.birthAChild();
  }

  birthAChild(): void {
    this._deaths++;

    this._child = new Ant(
      getRandomInt(window.innerWidth),
      getRandomInt(window.innerHeight)
    );
  }

  forgetDeaths(): void {
    this._deaths = 0;
  }

  currentChild(): Ant {
    return this._child;
  }

  currentDeaths(): number {
    return this._deaths;
  }
}
