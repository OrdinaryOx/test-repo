import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { FeaturesModule } from '@client-side-project/frontend/features'
import { UiModule } from '@client-side-project/frontend/ui'



@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, FeaturesModule, UiModule],
  selector: 'client-side-project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'share-a-meal-web';
}
