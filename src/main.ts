import { Drawer } from "./includes/drawer";
import { Ball } from "./includes/ball";
import { Engine } from "./includes/engine";
import { Officer } from './includes/officer';

class App {
  private drawer: Drawer;
  private ball: Ball;
  private engine: Engine;

  init(canvas: any): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // init our classes
    this.drawer = new Drawer(canvas.getContext('2d'));
    this.ball = Ball.createInitialStateFromCanvas(canvas);
    this.engine = new Engine();
  }

  begin(): void {
    // Enter game loop
    this.next();
  }

  private next(): void {
    window.requestAnimationFrame(() => {
      this.ball = this.engine.next(this.ball);
      this.drawer.draw(this.ball, this.isGameover());

      if (!this.isGameover()) {
        this.next();
      }
    });
  }

  public isGameover() {
    return Officer.isGameover(this.ball);
  }
}

const app = new App();
const canvas = document.querySelector("#canvas");
app.init(canvas);
app.begin();

canvas.addEventListener('click', () => {
  if (app.isGameover()) {
    app.init(canvas);
    app.begin();
  }
});




