import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-money-instructions',
  imports: [],
  templateUrl: './money-instructions.component.html',
  styleUrl: './money-instructions.component.css'
})
export class MoneyInstructionsComponent {
 @ViewChild('instructions') instructionsRef!: ElementRef;

  constructor(private router: Router) {}

  exitToMenu(): void {
    this.router.navigate(['/home']);
  }

  exitToGames(): void {
    this.router.navigate(['/games']);
  }

startGame(): void {
  this.router.navigate(['/money-game']);
}

  isSpeaking = false;

  routerSub!: Subscription;

  ngOnInit() {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.stopSpeech();
      }
    });

  window.addEventListener('beforeunload', () => {
    this.stopSpeech();
  });
}


ngOnDestroy() {
  this.routerSub.unsubscribe();
  this.stopSpeech();
}

playInstructions(): void {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    this.isSpeaking = false;
  } else {
    const instructions = this.instructionsRef.nativeElement.innerText;
    const utterance = new SpeechSynthesisUtterance(instructions);
    utterance.lang = 'el-GR';

    utterance.onstart = () => this.isSpeaking = true;
    utterance.onend = () => this.isSpeaking = false;
    utterance.onerror = () => this.isSpeaking = false;

    speechSynthesis.speak(utterance);
  }
}

stopSpeech(): void {
  if (speechSynthesis.speaking) {
    speechSynthesis.cancel();
    this.isSpeaking = false;
  }
  }
}
