import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconModule } from '../icon';

interface PersonalLink {
  href: string;
  label: string;
  icon: IconProp;
}
@Component({
  selector: 'app-footer',
  imports: [MatButtonModule, MatIconModule, IconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  personalLinks: PersonalLink[] = [
    {
      label: 'GitHub',
      href: 'https://github.com/softguru555',
      icon: ['fab', 'github'],
    },
    {
      label: 'Medium',
      href: 'https://softguru.medium.com/',
      icon: ['fab', 'medium-m'],
    },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/benjamin-mei-62902a1a4/',
      icon: ['fab', 'linkedin-in'],
    },
    {
      label: 'X',
      href: 'https://x.com/nikosanif',
      icon: ['fab', 'x-twitter'],
    }
  ]
}
