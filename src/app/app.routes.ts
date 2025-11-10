import { Routes } from '@angular/router';
import { About } from './about/about';
import { App } from './app';

export const routes: Routes = [

{ path: '', component: App},
 { path: 'about', component: About }

];
