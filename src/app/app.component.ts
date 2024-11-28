import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="content">
      <app-header/>
      <div class="main-content">
        <main><router-outlet/></main>
        <app-footer/>
      </div>
    </div>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular';
}
