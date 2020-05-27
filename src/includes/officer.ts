import { Ball } from "./ball";


export class Officer {
  static isGameover(ball: Ball): boolean {
    const { innerWidth, innerHeight } = window;

    return ball.x - ball.radius < 0
      || ball.y - ball.radius < 0
      || ball.x + ball.radius > innerWidth
      || ball.y + ball.radius > innerHeight;
  }
}
