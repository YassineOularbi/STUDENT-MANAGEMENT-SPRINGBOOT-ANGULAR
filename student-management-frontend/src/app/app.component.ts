import { Component } from '@angular/core';
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faChalkboardUser } from '@fortawesome/free-solid-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Student Management';
  faBuildingColumns = faBuildingColumns;
  faUserGraduate = faUserGraduate;
  faChalkboardUser = faChalkboardUser;
  faUsers = faUsers;
  faUserTie = faUserTie;
  faCircleInfo = faCircleInfo;
  faGear = faGear;
  faSignOut = faSignOut;
}
