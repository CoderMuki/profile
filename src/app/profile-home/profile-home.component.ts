import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-home',
  templateUrl: './profile-home.component.html',
  styleUrls: ['./profile-home.component.scss']
})
export class ProfileHomeComponent implements OnInit{
  
  showEdu = true;
  offBulb = true;
  @Output() showDiv = new EventEmitter<any>();


  ngOnInit(): void {
    window.addEventListener('scroll',()=>{
      let isEl = document.getElementById('nameDiv');
      var rect = isEl?.getBoundingClientRect();
      if(rect) {
        let ifThere = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) 
                      && rect.right <= (window.innerWidth || document.documentElement.clientWidth); 
        this.showDiv.emit(!ifThere);
      }
    })
  }



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
  

  public showDivs(): void {
    this.showDiv.emit(true);
  }

  copy(mail: any) {
    let msg  = navigator.clipboard.writeText(mail);
    alert(`Copied to clipboard`)
  }

}
