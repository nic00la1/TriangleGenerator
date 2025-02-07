import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TriangleGenerator';
  selectedFigure: string = 'triangle';

  triangleSize: number = 0;
  triangle: string = '';

  reversedTriangleSize: number = 0;
  reversedTriangle: string = '';

  squareSize: number = 0;
  square: string = '';

  rectangleWidth: number = 0;
  rectangleHeight: number = 0;
  rectangle: string = '';

  circle = '';
  circleRadius: number = 0;

  // Reset all figures
  resetAllFigures() {
    this.triangleSize = 0;
    this.triangle = '';
    this.reversedTriangle = '';
    this.reversedTriangleSize = 0;
    this.square = '';
    this.squareSize = 0;
    this.rectangle = '';
    this.rectangleWidth = 0;
    this.rectangleHeight = 0;
    this.circle = '';
    this.circleRadius = 0;
  }

  // Generate triangle
  generateTriangle() {
    this.triangle = '';
    for (let i = 1; i <= this.triangleSize; i++) {
      this.triangle += '*'.repeat(i) + '\n';
    }
  }

  // Generate reverse triangle
  generateReversedTriangle() {
    this.reversedTriangle = '';
    for (let i = this.reversedTriangleSize; i >= 1; i--) {
      this.reversedTriangle += '*'.repeat(i) + '\n';
    }
  }

  // Generate square
  generateSquare() {
    this.square = '';
    for (let i = 1; i <= this.squareSize; i++) {
      this.square += '*'.repeat(this.squareSize) + '\n';
    }
  }
  
  // Generate rectangle
  generateRectangle() {
    this.rectangle = '';
    for (let i = 1; i <= this.rectangleHeight; i++) {
      this.rectangle += '*'.repeat(this.rectangleWidth) + '\n';
    }
  }

  // Generate circle
  generateCircle() {
    this.circle = '';
    let radius = this.circleRadius;
    for (let i = 0; i <= 2 * radius; i++) {
      for (let j = 0; j <= 2 * radius; j++) {
        let distance = Math.sqrt((i - radius) * (i - radius) + (j - radius) * (j - radius));
        if (distance > radius - 0.5 && distance < radius + 0.5) {
          this.circle += '*';
        } else {
          this.circle += ' ';
        }
      }
      this.circle += '\n';
    }
  }
}
