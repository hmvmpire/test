
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
   // {
   //     path: '',
   //     pathMatch: 'full',
   //     redirectTo: 'settings',
   // },
    {
        path: '',
        component: HomeComponent,
       // resolve: {
       // },
       // data: {
       //     layout: 'grid',
       //     gridLayout: 'grid-4-sidebar',
       //     sidebarPosition: 'start',
       // },
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: [
       
    ],
})
export class MainRoutingModule { }