import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user = {
    name : 'Doe',
    firstName : 'John',
    age : 25,
    quote : 'two beer or not two beer',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg'
  };

  hidden: boolean = true;

  hideAge() {
    this.hidden = !this.hidden
  }
}
