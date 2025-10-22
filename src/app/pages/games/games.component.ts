import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
exitToGames() {
throw new Error('Method not implemented.');
}
  constructor(private router: Router) {}

  exitToMenu(): void {
    this.router.navigate(['/home']);
  }

  goToGodsInstructions(): void {
    this.router.navigate(['/gods-instructions']);
  }

  goToMathInstructions(): void {
    this.router.navigate(['/math-instructions']);
  }

  goToMoneyInstructions(): void {
    this.router.navigate(['/money-instructions']);
  }
}