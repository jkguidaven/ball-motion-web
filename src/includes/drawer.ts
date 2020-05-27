import { Ball } from "./ball";

export class Drawer {
  constructor(private context: CanvasRenderingContext2D) {
  }

  draw(ball: Ball, gameover: boolean) {
    this.context.canvas.width = window.innerWidth;
    this.context.canvas.height = window.innerHeight;

    const gradiant = this.context.createRadialGradient(
      ball.x, ball.y, ball.radius,
      ball.x * 1.1, ball.y * .9, ball.radius / 2
    );

    gradiant.addColorStop(0, "rgba(0, 204, 0, 1)");
    gradiant.addColorStop(.9, "rgba(0, 204, 0, .5)");

    // Draw the ball
    this.context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    this.context.fillStyle = gradiant;
    this.context.fill();

    if (gameover) {
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
    }
  }
}
