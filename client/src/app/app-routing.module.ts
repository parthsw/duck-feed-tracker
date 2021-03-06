import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';
import { HomeComponent } from './home/home.component';
import { ThankYouComponent } from './duck-feed/thank-you/thank-you.component';
import { DuckFeedPatternComponent } from './duck-feed/duck-feed-pattern/duck-feed-pattern.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: marker('Home') } },
  { path: 'pattern', component: DuckFeedPatternComponent, data: { title: marker('Duck Feeding Patterns') } },
  { path: 'thank-you', component: ThankYouComponent, data: { title: marker('Thank You!') } },
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
