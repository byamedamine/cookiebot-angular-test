import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CookieDeclaration } from './pages/cookie-declaration/cookie-declaration';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'cookie-declaration', component: CookieDeclaration },
];