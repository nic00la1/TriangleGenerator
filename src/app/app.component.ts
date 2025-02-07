import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TriangleGenerator';
  triangleSize: number = 0;
  reversedTriangleSize: number = 0;
  triangle: string = '';
  reversedTriangle: string = '';

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
}
