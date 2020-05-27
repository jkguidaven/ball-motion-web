import { Ball } from "./ball";
import { Ant } from "./ant";


export class Officer {
  static isGameover(ball: Ball): boolean {
    const { innerWidth, innerHeight } = window;

    return ball.x - ball.radius < 0
      || ball.y - ball.radius < 0
      || ball.x + ball.radius > innerWidth
      || ball.y + ball.radius > innerHeight;
  }

  static isAntHitByBall(ant: Ant, ball: Ball) {
    return ant.x > (ball.x - ball.radius) &&
      ant.x < (ball.x + ball.radius) &&
      ant.y > (ball.y - ball.radius) &&
      ant.y < (ball.y + ball.radius);
  }
}
