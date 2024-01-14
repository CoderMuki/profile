import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent {
  showEdu = true;

  urlOpen(url: any){
    window.open(url,'_blank');
  }

}


// TODO: Light bulb for light and dark mode
