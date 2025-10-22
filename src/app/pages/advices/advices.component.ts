import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advices',
  imports: [CommonModule],
  templateUrl: './advices.component.html',
  styleUrl: './advices.component.css'
})
export class AdvicesComponent {
  constructor(private router: Router) {}
  exitToMenu(): void {
    this.router.navigate(['/home']);
  }

  tabs = ['Όλα', 'Ειδικοί', 'Γονείς'];
  activeTab = 0; // default active tab

  selectTab(index: number) {
    this.activeTab = index;
  }

}
