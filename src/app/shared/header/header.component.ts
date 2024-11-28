import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { IconModule } from '../icon';
import { MatTooltipModule } from '@angular/material/tooltip';
interface MenuItem {
  link: string;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatButtonModule,
    MatIconModule,
    IconModule,
    MatTooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuItems: MenuItem[] = [
    { link: '/home', label: 'Home', icon: 'home'},
    { link: '/about', label: 'About', icon: 'info-circle'},
    { link: '/secured-feat', label: 'Secured Feature', icon: 'lock'}
  ]
}
