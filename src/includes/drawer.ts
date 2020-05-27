import { Ball } from "./ball";
import { AntQueen, Ant } from "./ant";

export class Drawer {
  constructor(private context: CanvasRenderingContext2D) {
  }

  draw(ball: Ball, antQueen: AntQueen, gameover: boolean) {
    this.context.canvas.width = window.innerWidth;
    this.context.canvas.height = window.innerHeight;

    this.drawAnt(antQueen.currentChild());
    this.drawBall(ball);
    this.drawScoreBoard(antQueen.currentDeaths());

    if (gameover) {
      this.drawGameOverMessage();
    }
  }

  drawAnt(ant: Ant): void {
    this.context.beginPath();
    this.context.fillStyle = 'black';
    this.context.arc(ant.x, ant.y, 5, 0, 2 * Math.PI);
    this.context.fill();
    this.context.arc(ant.x, ant.y + 10, 10, 0, 2 * Math.PI);
    this.context.fill();
    this.context.closePath();
  }

  drawBall(ball: Ball): void {
    this.context.beginPath();
    const gradiant = this.context.createRadialGradient(
      ball.x, ball.y, ball.radius,
      ball.x * 1.1, ball.y * .9, ball.radius / 2
    );

    gradiant.addColorStop(0, "rgba(0, 204, 0, 1)");
    gradiant.addColorStop(.9, "rgba(0, 204, 0, .5)");

    this.context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    this.context.fillStyle = gradiant;
    this.context.fill();
    this.context.closePath();
  }

  drawScoreBoard(score: Number) {
    this.context.beginPath();
    this.context.font = "16px Courier";
    this.context.fillStyle = "black";
    this.context.textAlign = "start";
    this.context.fillText(
      `Score: ${score}`,
      25,
      25);
    this.context.closePath();
  }

  drawGameOverMessage(): void {
    this.context.beginPath();
    this.context.font = "36px Courier";
    this.context.fillStyle = "black";
    this.context.textAlign = "center";
    this.context.fillText(
      "GAME OVER",
      window.innerWidth / 2,
      window.innerHeight / 2);

    this.context.font = "16px Courier";
    this.context.fillText(
      "Tap screen to restart",
      window.innerWidth / 2,
      (window.innerHeight / 2) + 36);
    this.context.closePath();
  }
}
