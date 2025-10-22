import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  imports: [],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  constructor(private router: Router) {
    this.router = router;
  }
  exitToMenu(): void {
    this.router.navigate(['/home']);
  }
}
