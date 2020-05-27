
const BALL_RADIUS = 50;

export class Ball {

  constructor(
    public x: number,
    public y: number,
    public radius: number) {
  }

  static createInitialStateFromCanvas(canvas: any) {
    return new Ball(
      canvas.width / 2,
      canvas.height / 2,
      BALL_RADIUS);
  }
}
