import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-math-game',
  imports: [CommonModule],
  templateUrl: './math-game.component.html',
  styleUrl: './math-game.component.css',
})
export class MathGameComponent {
  showModal: any;
  modalImage: any;
  operation: '+' | '-' = '+';
  constructor(private router: Router) { }

  showWelcomeModal = true;
  welcomeGif = 'hints/maths.gif';

  closeWelcomeModal(): void {
    this.showWelcomeModal = false;
  }

  goToMathInstructions(): void {
    this.router.navigate(['/math-instructions']);
  }

  exitToMenu(): void {
    this.router.navigate(['/home']);
  }

  numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  num1 = 0;
  num2 = 0;
  correctAnswer: number | null = null;
  selectedAnswer: number | null = null;

  ngOnInit() {
    this.generateProblem();
  }

  generateProblem() {
    // Randomly pick operation
    this.operation = Math.random() < 0.5 ? '+' : '-';

    if (this.operation === '+') {
      this.num1 = Math.floor(Math.random() * 10);
      this.num2 = Math.floor(Math.random() * (11 - this.num1));
      this.correctAnswer = this.num1 + this.num2;
    } else {
      this.num1 = Math.floor(Math.random() * 10) + 1; // num1: 1–10
      this.num2 = Math.floor(Math.random() * this.num1); // num2: 0–(num1)
      this.correctAnswer = this.num1 - this.num2;
    }

    this.selectedAnswer = null;
  }


  selectNumber(num: number) {
    this.selectedAnswer = num;

    const memeFolder = num === this.correctAnswer ? 'correct_memes' : 'wrong_memes';
    const memeList = this.getMemesList(memeFolder);
    const randomIndex = Math.floor(Math.random() * memeList.length);
    this.modalImage = `${memeFolder}/${memeList[randomIndex]}`;
    this.showModal = true;

    setTimeout(() => {
      this.showModal = false;
      if (num === this.correctAnswer) {
        this.generateProblem();
      }
    }, 2000);
  }

  // Add this method to provide a dummy list of meme filenames
  getMemesList(folder: string): string[] {
    if (folder === 'correct_memes') {
      return ['correct1.png', 'correct2.png', 'correct3.png', 'correct4.png'];
    } else {
      this.selectedAnswer = null;
      return ['wrong1.png', 'wrong2.png', 'wrong3.png', 'wrong4.png'];
    }
  }

}

