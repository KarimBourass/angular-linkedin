import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  show_me: boolean = false;


  onMe() {
    this.show_me = !this.show_me
  }

}
