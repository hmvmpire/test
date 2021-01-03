import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { RootComponent } from './components/root/root.component';


const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
          path: '',
          pathMatch: 'full',
          loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'disabled',
    anchorScrolling: 'disabled',
    initialNavigation: 'enabled',
    preloadingStrategy: PreloadAllModules,
}),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
