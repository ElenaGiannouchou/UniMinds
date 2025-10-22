import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-menu',
  imports: [NavBarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  year: number = new Date().getFullYear();
  
scrollVideos(): void {
  const container = document.getElementById('videoScroll');
  if (!container) return;

  const scrollAmount = 420; // adjust if needed
  const maxScrollLeft = container.scrollWidth - container.clientWidth + 420;

  if (container.scrollLeft + scrollAmount >= maxScrollLeft) {
    // We've reached the end → loop to start
    container.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }
}

}
