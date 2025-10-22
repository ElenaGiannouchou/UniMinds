// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-gods-game',
//   imports: [CommonModule],
//   templateUrl: './gods-game.component.html',
//   styleUrl: './gods-game.component.css'
// })

// export class GodsGameComponent implements OnInit {
//   nameCards = [
//     'Άρης', 'Διόνυσος', 'Δίας', 'Δήμητρα', 'Ερμής', 'Ήρα',
//     'Άρτεμις', 'Αφροδίτη', 'Ήφαιστος', 'Απόλλωνας', 'Ποσειδώνας', 'Αθηνά'
//   ];

//   godImages = [
//     'god1.png', 'god2.png', 'god3.png', 'god4.png', 'god5.png', 'god6.png',
//     'god7.png', 'god8.png', 'god9.png', 'god10.png', 'god11.png', 'god12.png'
//   ];

//   specificRotations = [-15, 10, -5, 20, -10, 15, -20, 8, -12, 18, -8, 12];

//   randomizedGodImages: string[] = [];
//   randomizedCards: { name: string, rotation: number, position: { x: number, y: number } }[] = [];

//   selectedGod: string | null = null;
//   selectedName: string | null = null;

//   hoveredIndex: number | null = null;

//   showModal = false;
//   modalImage: string = '';
//   matchWasWrong = false;

//   correctPairs: { [key: string]: string } = {
//     'god1.png': 'Διόνυσος',
//     'god2.png': 'Άρης',
//     'god3.png': 'Άρτεμις',
//     'god4.png': 'Ερμής',
//     'god5.png': 'Δήμητρα',
//     'god6.png': 'Αθηνά',
//     'god7.png': 'Αφροδίτη',
//     'god8.png': 'Δίας',
//     'god9.png': 'Ήφαιστος',
//     'god10.png': 'Ποσειδώνας',
//     'god11.png': 'Απόλλωνας',
//     'god12.png': 'Ήρα'
//   };

//   constructor(private router: Router) { }

//   ngOnInit(): void {
//     this.randomizeCards();
//     this.randomizeGodImages();
//   }

//   randomizeGodImages(): void {
//     this.randomizedGodImages = [...this.godImages].sort(() => Math.random() - 0.5);
//   }

//   randomizeCards(): void {
//     const shuffledCards = [...this.nameCards].sort(() => Math.random() - 0.5);

//     this.randomizedCards = shuffledCards.map((name, index) => ({
//       name,
//       rotation: this.specificRotations[index],
//       position: {
//         x: Math.random() * 20 - 5,
//         y: Math.random() * 20 - 5
//       }
//     }));
//   }

//   selectGod(godFilename: string): void {
//     this.selectedGod = godFilename;
//     this.checkMatch();
//   }

//   selectName(name: string): void {
//     this.selectedName = name;
//     this.checkMatch();
//   }

//   checkMatch(): void {
//     if (this.selectedGod && this.selectedName) {
//       const isCorrect = this.correctPairs[this.selectedGod] === this.selectedName;
//       this.matchWasWrong = !isCorrect;

//       const memeFolder = isCorrect ? 'correct_memes' : 'wrong_memes';
//       const memeList = this.getMemesList(memeFolder);
//       const randomIndex = Math.floor(Math.random() * memeList.length);
//       this.modalImage = `${memeFolder}/${memeList[randomIndex]}`;
//       this.showModal = true;

//       setTimeout(() => {
//         this.showModal = false;
//         this.resetSelections();

//         if (isCorrect) {
//           //  Shuffle again when match is correct
//           this.randomizeGodImages();
//           this.randomizeCards();
//         }
//       }, 2000);
//     }
//   }


//   resetSelections(): void {
//     this.selectedGod = null;
//     this.selectedName = null;
//   }

//   getMemesList(folder: string): string[] {
//     return folder === 'correct_memes'
//       ? ['correct1.png', 'correct2.png', 'correct3.png','correct4.png']
//       : ['wrong1.png', 'wrong2.png', 'wrong3.png','wrong4.png'];
//   }

//   exitToMenu(): void {
//     this.router.navigate(['/home']);
//   }

//   goToGodsInstructions(): void {
//     this.router.navigate(['/gods-instructions']);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gods-game',
  imports: [CommonModule],
  templateUrl: './gods-game.component.html',
  styleUrls: ['./gods-game.component.css']
})

export class GodsGameComponent implements OnInit {
  nameCards = [
    'Άρης', 'Διόνυσος', 'Δίας', 'Δήμητρα', 'Ερμής', 'Ήρα',
    'Άρτεμις', 'Αφροδίτη', 'Ήφαιστος', 'Απόλλωνας', 'Ποσειδώνας', 'Αθηνά'
  ];

  godImages = [
    'god1.png', 'god2.png', 'god3.png', 'god4.png', 'god5.png', 'god6.png',
    'god7.png', 'god8.png', 'god9.png', 'god10.png', 'god11.png', 'god12.png'
  ];

  specificRotations = [-15, 10, -5, 20, -10, 15, -20, 8, -12, 18, -8, 12];

  randomizedGodImages: string[] = [];
  randomizedCards: { name: string, rotation: number, position: { x: number, y: number } }[] = [];

  remainingGods: string[] = [];
  remainingCards: { name: string, rotation: number, position: { x: number, y: number } }[] = [];

  selectedGod: string | null = null;
  selectedName: string | null = null;

  hoveredIndex: number | null = null;

  showModal = false;
  modalImage: string = '';
  matchWasWrong = false;

  showWelcomeModal = true;
  welcomeGif = 'hints/gods.gif';

  closeWelcomeModal(): void {
    this.showWelcomeModal = false;
  }

  correctPairs: { [key: string]: string } = {
    'god1.png': 'Διόνυσος',
    'god2.png': 'Άρης',
    'god3.png': 'Άρτεμις',
    'god4.png': 'Ερμής',
    'god5.png': 'Δήμητρα',
    'god6.png': 'Αθηνά',
    'god7.png': 'Αφροδίτη',
    'god8.png': 'Δίας',
    'god9.png': 'Ήφαιστος',
    'god10.png': 'Ποσειδώνας',
    'god11.png': 'Απόλλωνας',
    'god12.png': 'Ήρα'
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.resetGame();
  }

  resetGame(): void {
    // Initialize remaining gods and cards
    this.remainingGods = [...this.godImages].sort(() => Math.random() - 0.5);

    const shuffledCards = [...this.nameCards].sort(() => Math.random() - 0.5);
    this.remainingCards = shuffledCards.map((name, index) => ({
      name,
      rotation: this.specificRotations[index],
      position: {
        x: Math.random() * 20 - 5,
        y: Math.random() * 20 - 5
      }
    }));

    // Set displayed arrays
    this.randomizedGodImages = [...this.remainingGods];
    this.randomizedCards = [...this.remainingCards];

    this.resetSelections();
  }

  selectGod(godFilename: string): void {
    this.selectedGod = godFilename;
    this.checkMatch();
  }

  selectName(name: string): void {
    this.selectedName = name;
    this.checkMatch();
  }

  checkMatch(): void {
    if (this.selectedGod && this.selectedName) {
      const isCorrect = this.correctPairs[this.selectedGod] === this.selectedName;
      this.matchWasWrong = !isCorrect;

      const memeFolder = isCorrect ? 'correct_memes' : 'wrong_memes';
      const memeList = this.getMemesList(memeFolder);
      const randomIndex = Math.floor(Math.random() * memeList.length);
      this.modalImage = `${memeFolder}/${memeList[randomIndex]}`;
      this.showModal = true;

      setTimeout(() => {
        this.showModal = false;

        if (isCorrect) {
          // Remove matched items from remaining arrays
          this.remainingGods = this.remainingGods.filter(g => g !== this.selectedGod);
          this.remainingCards = this.remainingCards.filter(c => c.name !== this.selectedName);

          // Shuffle remaining items
          this.randomizedGodImages = [...this.remainingGods].sort(() => Math.random() - 0.5);
          this.randomizedCards = [...this.remainingCards].sort(() => Math.random() - 0.5);

          // If all matched, reset game
          if (this.remainingGods.length === 0) {
            this.resetGame();
          }
        }

        this.resetSelections();
      }, 2000);
    }
  }

  resetSelections(): void {
    this.selectedGod = null;
    this.selectedName = null;
  }

  getMemesList(folder: string): string[] {
    return folder === 'correct_memes'
      ? ['correct1.png', 'correct2.png', 'correct3.png', 'correct4.png']
      : ['wrong1.png', 'wrong2.png', 'wrong3.png', 'wrong4.png'];
  }

  exitToMenu(): void {
    this.router.navigate(['/home']);
  }

  goToGodsInstructions(): void {
    this.router.navigate(['/gods-instructions']);
  }
}
