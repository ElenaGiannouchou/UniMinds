import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-money-game',
  imports: [CommonModule],
  templateUrl: './money-game.component.html',
  styleUrl: './money-game.component.css'
})
export class MoneyGameComponent {
  modalImage: string | undefined;
  showModal: boolean = false;
  matchWasWrong: any;
  constructor(private router: Router) { }
  currentProblem = { euros: 0, cents: 0 };

  
  showWelcomeModal = true;
  welcomeGif = 'hints/money.gif';

  closeWelcomeModal(): void {
    this.showWelcomeModal = false;
  }

  generateProblem(): void {
    this.currentProblem.euros = Math.floor(Math.random() * 101);  // 0 to 100 euros
    this.currentProblem.cents = Math.floor(Math.random() * 100); // 0 to 99 cents
  }

  ngOnInit(): void {
    this.generateProblem();
  }

  checkAnswer(): void {
    const target = this.currentProblem.euros + this.currentProblem.cents / 100;
    const isCorrect = Math.abs(this.total - target) < 0.01;

    const memeFolder = isCorrect ? 'correct_memes' : 'wrong_memes';
    const memeList = isCorrect
      ? ['correct1.png', 'correct2.png', 'correct3.png', 'correct4.png']
      : ['wrong1.png', 'wrong2.png', 'wrong3.png', 'wrong4.png'];
    const randomIndex = Math.floor(Math.random() * memeList.length);
    this.modalImage = `${memeFolder}/${memeList[randomIndex]}`;
    this.matchWasWrong = !isCorrect;
    this.showModal = true;

    setTimeout(() => {
      this.showModal = false;
      this.resetCounts();

      if (isCorrect) {
        this.generateProblem(); // load new challenge only if correct
      }
    }, 2000);
  }


  resetCounts(): void {
    this.banknotes.forEach(n => n.count = 0);
    this.coins.forEach(c => c.count = 0);
  }


  goToMoneyInstructions(): void {
    this.router.navigate(['/money-instructions']);
  }

  exitToMenu(): void {
    this.router.navigate(['/home']);
  }

  banknotes = [
    { value: 100, image: '../Assets/100e.png', count: 0 },
    { value: 50, image: '../Assets/50e.png', count: 0 },
    { value: 20, image: '../Assets/20e.png', count: 0 },
    { value: 10, image: '../Assets/10e.png', count: 0 },
    { value: 5, image: '../Assets/5e.png', count: 0 }
  ];

  coins = [
    { value: 2, image: '../Assets/c2e.png', count: 0 },
    { value: 1, image: '../Assets/c1e.png', count: 0 },
    { value: 0.5, image: '../Assets/c50.png', count: 0 },
    { value: 0.2, image: '../Assets/c20.png', count: 0 },
    { value: 0.1, image: '../Assets/c10.png', count: 0 },
    { value: 0.05, image: '../Assets/c5.png', count: 0 },
    { value: 0.02, image: '../Assets/c2.png', count: 0 },
    { value: 0.01, image: '../Assets/c1.png', count: 0 }
  ];

  increase(item: any) {
    item.count++;
  }

  decrease(item: any) {
    if (item.count > 0) item.count--;
  }

  get total() {
    const totalNotes = this.banknotes.reduce((sum, i) => sum + i.value * i.count, 0);
    const totalCoins = this.coins.reduce((sum, i) => sum + i.value * i.count, 0);
    return totalNotes + totalCoins;
  }
}
