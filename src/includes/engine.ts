import { Ball } from "./ball";

export class Engine {
  private beta: number;
  private gamma: number;

  constructor() {
    if (window.DeviceMotionEvent) {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {
        window.DeviceOrientationEvent.requestPermission()
          .then(response => {
            if (response == 'granted') {
              this.beginListen();
            }
          });
      } else {
        this.beginListen();
      }
    }
  }

  beginListen() {
    window.addEventListener('deviceorientation', (event) => {
      this.beta = event.beta;
      this.gamma = event.gamma;
    });
  }

  next(ball: Ball): Ball {
    ball.y += this.beta || 0;
    ball.x += this.gamma || 0;

    return ball;
  }
}

