import { Component, Input } from '@angular/core';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzKFTT1pO_nN48gvD3Or2BC-wdiCeMvC0",
  authDomain: "mukilans-profile.firebaseapp.com",
  projectId: "mukilans-profile",
  storageBucket: "mukilans-profile.appspot.com",
  messagingSenderId: "303598254569",
  appId: "1:303598254569:web:51b72ecfb9386b8188f378",
  measurementId: "G-DG91EWGXW6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Profile';
  mobHeader = (window.innerWidth < 600) ? true : false;
  showMenu = false;
  checkDiv(event: any) {
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
