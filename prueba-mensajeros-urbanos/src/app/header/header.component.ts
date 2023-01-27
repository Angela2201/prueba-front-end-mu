import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  darkMode = false;
  constructor() {
    this.detectColorScheme();
  }

  detectColorScheme(){
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.darkMode = true;
      document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
    }
  }

  toggleTheme() {
    console.log("click!")
    this.darkMode = !this.darkMode;
    document.documentElement.setAttribute('data-theme', this.darkMode ? 'dark' : 'light');
  }
}
