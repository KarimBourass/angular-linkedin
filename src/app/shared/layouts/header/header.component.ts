import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  show_me: boolean = false;
  is_new_notification: boolean = true;
  is_new_messages: boolean = true;


  onMe() {
    this.show_me = !this.show_me
  }

}
