// import { Component } from '@angular/core';
// import { Router, RouterOutlet } from '@angular/router'; 

// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']  
// })

// export class AppComponent {
//   title = 'AngProject';
//   constructor(private router: Router) {}

//   ngOnInit() {
//     // Wait for animation duration (~400ms), then navigate
//     setTimeout(() => {
//       this.router.navigate(['/home']);
//     }, 4000);  
//   }
// }
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router'; 

@Component({
  selector: 'app-root',
  standalone: true, // ✅ since you're using `imports: [RouterOutlet]`
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  
})
export class AppComponent implements OnInit {
  title = 'AngProject';

  constructor(private router: Router) {}

  ngOnInit() {
    // initial redirect check
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 4000);

    // also check screen size at startup
    this.checkScreen();
  }

  // listen for window resize
  @HostListener('window:resize')
  onResize() {
    this.checkScreen();
  }

  private checkScreen() {
    if (window.innerWidth < 1020) {
      this.router.navigate(['/not-supported']);
    }
    else {
      // if on not-supported page and screen is now large enough, go to home
      if (this.router.url === '/not-supported') {
        this.router.navigate(['/home']);
      }
    }
  }
}
