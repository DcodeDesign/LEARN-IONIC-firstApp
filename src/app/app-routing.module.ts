import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'stopwatch',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./Components/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'chrono',
    loadChildren: () => import('./Components/chrono/chrono.module').then(m => m.ChronoPageModule)
  },
  {
    path: 'stopwatch',
    loadChildren: () => import('./Components/stopwatch/stopwatch.module').then(m => m.StopwatchPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
