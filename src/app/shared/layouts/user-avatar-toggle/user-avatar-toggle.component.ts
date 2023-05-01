import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'user-avatar-toggle',
  templateUrl: './user-avatar-toggle.component.html',
  styleUrls: ['./user-avatar-toggle.component.scss']
})
export class UserAvatarToggleComponent {

  @ViewChild('dropDown') dropDown!: ElementRef;
  @ViewChild('dropDownButton') dropDownButton!: ElementRef;
  isDropDownOpen: any = false;

  toggleMenu(): void {
    this.isDropDownOpen = !this.isDropDownOpen;
  }

  clickedOutside(): void {
    this.isDropDownOpen = false;
  }

}
