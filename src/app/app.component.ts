import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Profile';
  showHeader = false;
  mobHeader = false;
  showMenu = false;
  checkDiv(event: any) {
    this.showHeader = event
    this.mobHeader = (window.innerWidth < 600) ? true : false;
  }

  scrollView(element: any) {
    let el = document.getElementById(`${element}`);
    if(el) {
      el.scrollIntoView(
        { 
          behavior: "smooth", 
          block: "start", 
          inline: "start" 
        })
        this.showMenu = !this.showMenu;
    }
  }
}
