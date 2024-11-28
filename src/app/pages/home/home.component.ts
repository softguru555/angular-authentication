import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { IconModule } from '../../shared/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Feature, features } from './features.data';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule, IconModule, MatCardModule, MatTooltipModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly showAllFeatures = signal(false);
  
  readonly showFeaturesLabel = computed(() => 
    this.showAllFeatures()? 'Show less' : 'Show more'
  );
  readonly features = computed<Feature[]>(() => 
    this.showAllFeatures()? features: features.slice(0, 8)
  );

  toggleFeatures() {
    this.showAllFeatures.update(show => !show);
  }
}