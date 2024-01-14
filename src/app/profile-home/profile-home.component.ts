import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent {
  showEdu = true;
  offBulb = true;

  urlOpen(url: any){
    window.open(url,'_blank');
  }

  changetheme(){
    const body = document.getElementsByTagName('body')[0];
    if (body.classList.contains('light-theme')){
      body.classList.remove('light-theme');
      this.offBulb = true;
    } else {
      body.classList.add('light-theme');
      this.offBulb = false;
    }
  }

}


// TODO: Light bulb for light and dark mode
// TODO: Ripples for light and dark mode
